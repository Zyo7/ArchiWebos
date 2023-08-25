let modalStatut = null;
let submitModal = document.getElementById("submitModal");
submitModal.classList.add("submitNOGO");
let ajoutData = document.getElementById("formModal");

//Gestion de la Modal
const openModal = (e) => {
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
    let titleStatut = document.getElementById("titre");
    let fileStatut = document.getElementById("image");
    let categorieStatut = document.getElementById("categorie");
    if (fileStatut.files.length != 0 && titleStatut.value.length != 0 && categorieStatut.innerHTML != "") {
        submitModal.classList.add("submitGO");
        submitModal.classList.remove("submitNOGO");
        
        ajoutData.addEventListener("submit", (e) =>{
            e.preventDefault();
            let imageTest = document.querySelector('#idQuelconque input[type=file]');
            const titleTest = titleStatut.value;
            const imageTest2 = imageTest.files[0];
            const dataApi = new FormData();
            dataApi.append("title", titleTest);
            dataApi.append("image", imageTest2);
            dataApi.append("category", 2);
            const bearerTest = `Bearer ${window.localStorage.getItem("token")}`
            fetch(`http://localhost:5678/api/works`, {
                method: 'POST',
                headers: {
                    //'Accept': 'application/json',
                    'Content-Type': 'multipart/form-data',
                    'Authorization': bearerTest
                },
                body: dataApi
            })
        

        }); 
    }
    else{
        submitModal.classList.remove("submitGO");
        submitModal.classList.add("submitNOGO");
    }
})

const formData = new FormData();
formData.append('title', 'titre de test');
console.log(formData);
console.log(formData.title);









