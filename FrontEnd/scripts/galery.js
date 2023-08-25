async function gengaleryAPI(data){
    await fetch("http://localhost:5678/api/works", {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(function (res){
        return res.json();
    }).then(function (value){
        galery.innerHTML = "";
        modal.innerHTML = "";
        for(let count2 = 0; count2 < value.length; count2++){
            if(data === value[count2].category.name || data === "Tous"){
                //Générateur pour la galerie
                let figureGal = document.createElement("figure");
                let imageGal = document.createElement("img");
                let figcatGal = document.createElement("figcatption");
                imageGal.src = value[count2].imageUrl;
                imageGal.alt = value[count2].title;
                figcatGal.innerHTML = value[count2].title;
                figureGal.appendChild(imageGal);
                figureGal.appendChild(figcatGal);
                galery.appendChild(figureGal);
                //générateur pour la modal
                let figureModal = document.createElement("figure");
                let trashCan = document.createElement("i");
                let moveArrow = document.createElement("i");
                let imageModal = document.createElement("img");
                let editionPhoto = document.createElement("p");
                trashCan.classList.add("fa-solid");
                trashCan.classList.add("fa-trash-can");
                moveArrow.classList.add("fa-solid");
                moveArrow.classList.add("fa-up-down-left-right");
                imageModal.src = value[count2].imageUrl;
                imageModal.alt = value[count2].title;
                editionPhoto.innerHTML = "éditer";
                figureModal.appendChild(trashCan);
                figureModal.appendChild(moveArrow);
                figureModal.appendChild(imageModal);
                figureModal.appendChild(editionPhoto);
                modal.appendChild(figureModal);
            }
        }
        return ;
    }).catch(function (error){
        alert("Non connecté");
    })
}

filtre.addEventListener("click", (res) => {
    document.querySelector(".selected").classList.remove("selected");
    res.target.classList.add("selected");
    res.target.innerHTML == "Hotels &amp; restaurants" ? selectedName = "Hotels & restaurants" : selectedName = res.target.innerHTML;
    gengaleryAPI(selectedName);
});

gengaleryAPI(selectedName);



//section scripts selon la présence du token et son retrait
if(token !== null){
    for(let count = 0; count < displayOff.length; count++){
        displayOff[count].classList.remove("Off");
        if(!displayOff[count].classList.contains("blackDiv")){
            displayOff[count].classList.add("On");
        }
    }
    for(let count = 0; count < displayOn.length; count++){
        displayOn[count].classList.remove("On");
        displayOn[count].classList.add("Off");
    }
    logLink.innerHTML = "logout";
    logLink.href = "index.html";
    logIn = true;
}
else{
    for(let count = 0; count < displayOff.length; count++){
    displayOff[count].classList.remove("On");
        displayOff[count].classList.add("Off");
    }
    for(let count = 0; count < displayOn.length; count++){
        displayOn[count].classList.remove("Off");
        displayOn[count].classList.add("On");
    }
    logLink.innerHTML = "login";
    logLink.href = "login.html";
    logIn = false;
}

const logOut = document.getElementById("log");
logOut.addEventListener("click", () => {
    if(logIn){
        localStorage.clear();
    }
})
