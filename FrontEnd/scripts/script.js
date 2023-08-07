//console.log(token);

/*
async function logMovies() {
    const response = await fetch("http://example.com/movies.json");
    const movies = await response.json();
    console.log(movies);
}
*/

let token = window.localStorage.getItem("token");
//token !== null ? console.log("token plein") : console.log("token vide")
let login = false;
let displayOff = document.querySelectorAll(".Off");
let displayOn = document.querySelectorAll(".On");
let logLink = document.getElementById("log");
let filtre = document.getElementById("filtre");
let ul = document.createElement("ul");