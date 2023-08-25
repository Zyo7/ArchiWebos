/*async function connexionAPI(user){
    await fetch("http://localhost:5678/api/users/login", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    }).then(function (res){
        return res.json();
    }).then(function (value){
        window.localStorage.setItem("token", value.token);
    }).catch(function (error){
        alert("Wrong mail or password");
    })
}*/

const buttonLogin = document.getElementById('submit');
buttonLogin.addEventListener("click", () => {
   const user1 = {
       "email": document.getElementById("email").value,
       "password": document.getElementById("password").value
    };
    console.log(user1);
    fetch("http://localhost:5678/api/users/login", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user1)
    }).then(function (res){
        return res.json();
    }).then(function (value){
        console.log(value.message);
        if(value.message == "user not found"){
            //JS pour afficher identifiant incorrect ou return avec alert("")
            return
        }
        window.localStorage.setItem("token", value.token);
        window.location.href = "./index.html";
    }).catch(function (error){
        alert("Wrong mail or password");
    })
});