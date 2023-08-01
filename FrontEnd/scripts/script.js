//let token = window.localStorage.getItem("token");
//console.log(token);
//token === null ? console.log("token vide") : console.log("token plein")

/*
async function logMovies() {
  const response = await fetch("http://example.com/movies.json");
  const movies = await response.json();
  console.log(movies);
}
*/




let login = false;
let displayOff = document.querySelectorAll(".Off");
let displayOn = document.querySelectorAll(".On");
if(login){
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
}

let filtre = document.getElementById("filtre");
//variable utilisable pour l'affichage filtré de la gallerie
let selectedFiltre = 0;

//fonction de génération du filtre dynamiquement, à compléter une fois la connexion à l'API établi
let ul = document.createElement("ul");
for(let count = -1; count < 1 /*length objet*/; count++){
    let li = document.createElement("li");
    if(count === -1){
        li.innerHTML = "Tous";
        li.className = "tous";
        li.classList.add("selected");
    }
    else{
        //boucle pour créer depuis les catégories de l'objet
        li.innerHTML = "Objet";
        li.className = "objet";
    }
    li.classList.add("filtres");
    ul.appendChild(li);
}
filtre.appendChild(ul);

let filtres = document.querySelectorAll(".filtres");
for(let count = 0; count < filtres.length; count++){
    filtre.addEventListener("click", (res) => {
        filtres[selectedFiltre].classList.remove("selected");
        res.target.classList.add("selected")
        selectedFiltre = count;
    });
}
//console.log(filtre);
