async function genGalleryAPI(data){
    await fetch("http://localhost:5678/api/works", {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(function (res){
        return res.json();
    }).then(function (value){
        let gallery = document.querySelector(".gallery");
        for(let count2 = 0; count2 < value.length; count2++){
            if(data === value[count2].category.name || data === "Tous"){
                let figure = document.createElement("figure");
                let image = document.createElement("img");
                image.src = value[count2].imageUrl;
                image.alt = value[count2].title;
                let figcat = document.createElement("figcatption");
                figcat.innerHTML = value[count2].title;
                figure.appendChild(image);
                figure.appendChild(figcat);
                gallery.appendChild(figure);
            }
        }
        return ;
    }).catch(function (error){
        alert("Non connecté");
    })
}


async function genCatAPI(){
    await fetch("http://localhost:5678/api/categories", {
       method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(function (res){
        return res.json();
    }).then(function (value){
        for(let count1 = -1; count1 < value.length; count1++){
            let li = document.createElement("li");
            if(count1 === -1){
                li.innerHTML = "Tous";
                li.className = "Tous";
                li.classList.add("selected");
            }
            else{
                li.innerHTML = value[count1].name;
                li.className = value[count1].name;
            }
            li.classList.add("filtres");
            ul.appendChild(li);
        }
        filtre.appendChild(ul);
        return ;
    }).catch(function (error){
        alert("Non connecté");
    }) 
}

genCatAPI();


genGalleryAPI("Tous");


if(token === null){
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
}

