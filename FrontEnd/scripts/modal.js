let modalStatut = null;
let submitModal = document.getElementById("submitModal");
let ajoutData = document.getElementById("formModal");
let submitStatut = false;
let categorieValue = 0;
let titleStatut = document.getElementById("titre");
let fileStatut = document.getElementById("image");
let categorieStatut = document.getElementById("categorie");
let deleteGalerie = document.querySelector(".galerieModal");


//Gestion de la Modal
function openModal(e) {
    e.preventDefault();
    const target = document.querySelector(e.target.getAttribute('href'));
    target.style.display = "flex";
    target.setAttribute('aria-hidden', false);
    target.setAttribute('aria-modal', true);
    modalStatut = target;
    modalStatut.addEventListener('click', closeModal);
    modalStatut.querySelector(".ajoutPhoto").addEventListener("click", ajoutPhotoAPI);
    modalStatut.querySelector(".close-modal1").addEventListener("click", closeModal);
    modalStatut.querySelector(".modal-stop").addEventListener("click", stopPropagation);
}

const ajoutPhotoAPI = (e) => {
    e.preventDefault();
    modalStatut.querySelector(".modalGalerie").style.display = "none";
    modalStatut.querySelector(".modalAjout").style.display = "block";
    modalStatut.querySelector(".close-modal2").addEventListener("click", closeModal);
    modalStatut.querySelector(".return-modal1").addEventListener("click", returnModal);
}

const returnModal = (e) => {
    e.preventDefault();
    modalStatut.querySelector(".modalGalerie").style.display = "flex";
    modalStatut.querySelector(".modalAjout").style.display = "none";
    document.getElementById("formModal").reset();
    submitModal.classList.add("submitNOGO");
}

const closeModal = (e) => {
    if (modalStatut === null) return;
    e.preventDefault();
    modalStatut.querySelector(".modalGalerie").style.display = "flex";
    modalStatut.querySelector(".modalAjout").style.display = "none";
    modalStatut.style.display = "none";
    modalStatut.setAttribute('aria-hidden', true);
    modalStatut.setAttribute('aria-modal', false);
    document.getElementById("formModal").reset();
    submitModal.classList.add("submitNOGO");
    modalStatut.removeEventListener('click', closeModal);
    modalStatut.querySelector(".close-modal1").removeEventListener("click", closeModal);
    modalStatut.querySelector(".close-modal2").removeEventListener("click", closeModal);
    modalStatut.querySelector(".modal-stop").removeEventListener("click", stopPropagation);
    modalStatut = null;
}

const stopPropagation = (e) => {
    e.stopPropagation();
}

document.querySelectorAll(".portfolio__titre--modifier").forEach(a => {
    a.addEventListener('click', openModal);
});

window.addEventListener('keydown', (e) => {
    if (e.key === "Escape" || e.key ==="Esc"){
        closeModal(e);
    }
});



//Gestion API
ajoutData.addEventListener("change", (e) => {
    e.preventDefault();
    if(titleStatut.value.length != 0){
        titleStatut.style.removeProperty("border");
    }
    if(categorieStatut.value.length != 0){
        categorieStatut.style.removeProperty("border");
    }
    if(fileStatut.files.length != 0){
        document.querySelector(".divUpload").style.removeProperty("border");
    }
    if (fileStatut.files.length != 0 && titleStatut.value.length != 0 && categorieStatut.value != "") {
        submitStatut = true;
        document.getElementById("required").style["display"] = "none";
        submitModal.classList.add("submitGO");
        submitModal.classList.remove("submitNOGO");
    }
    else{
        submitStatut = false;
        submitModal.classList.remove("submitGO");
        submitModal.classList.add("submitNOGO");
    }
})

fileStatut.addEventListener("change", (e) =>{
    let imgUpload = document.getElementById("imgUpload");
    let buttonUpload = document.querySelector(".buttonUpload");
    let infoSize = document.querySelector(".infoSize");
    if(fileStatut.files.length != 0){
        imgUpload.src = window.URL.createObjectURL(fileStatut.files[0]);
        buttonUpload.style["display"] = "none";
        infoSize.style["display"] = "none";
        imgUpload.classList.add("imgPreview");
    }
    else{
        imgUpload.src = "assets/icons/picture-svg-img.png";
        imgUpload.classList.remove("imgPreview");
        buttonUpload.style["display"] = "block";
        infoSize.style["display"] = "block";
    }
})

ajoutData.addEventListener("submit", (e) => {
    e.preventDefault();
    if(titleStatut.value.length == 0){
        titleStatut.style["border"] = "red solid";
    }
    if(categorieStatut.value.length == 0){
        categorieStatut.style["border"] = "red solid";
    }
    if(fileStatut.files.length == 0){
        document.querySelector(".divUpload").style["border"] = "red solid";
    }
    if(!submitStatut){
        document.getElementById("required").style["display"] = "block";
        return;
    }
    switch (categorieStatut.value) {
        case "Objets":
            categorieValue = 1;
            break;
        case "Appartements":
            categorieValue = 2;
            break;
        case "Hotels & restaurants":
            categorieValue = 3;
            break;
        default:
            return;
    }
    const titleTest = titleStatut.value;
    const imageTest = fileStatut.files[0];
    const dataApi = new FormData();
    dataApi.append("title", titleTest);
    dataApi.append("image", imageTest);
    dataApi.append("category", categorieValue);

    fetch(`http://localhost:5678/api/works`, {
        method: 'POST',
        headers: new Headers({
            'Accept': 'application/json',
            //'Access-Control-Allow-Origin':'*',
            //'Content-Type': 'multipart/form-data',
            'Authorization': "Bearer " + token
        }),
        body: dataApi
    }).then(function (res){
        gengaleryAPI(selectedName);
        return res;
    }).catch(function (error){
        alert("Non envoyé:", error);
    })
    console.log("La page n'a pas été actualisé");


})

deleteGalerie.addEventListener("click", (e) => {
    const deleteAPI = new FormData();
    deleteAPI.append("id", e.target.dataset.id)
    fetch(`http://localhost:5678/api/works/${e.target.dataset.id}`, {
        method: 'DELETE',
        headers: new Headers({
            'Accept': '*/*',
            //'Access-Control-Allow-Origin':'*',
            //'Content-Type': 'multipart/form-data',
            'Authorization': "Bearer " + token
        })
    }).then(function (res){
        gengaleryAPI(selectedName);
        return res;
    }).catch(function (error){
        alert("Non envoyé:", error);
    })
})








