formLogin.addEventListener("change", () =>{
    let emailChange = document.getElementById("email");
    let pwdChange = document.getElementById("password");
    if(emailChange.value.length != 0){
        emailChange.style.removeProperty("border");
    }
    if(pwdChange.value.length != 0){
        pwdChange.style.removeProperty("border");
    }
    if(emailChange.value.length != 0 && pwdChange.value.length != 0){
        document.getElementById("required").style["display"] = "none";
    }
})

buttonLogin.addEventListener("click", (e) => {
    e.preventDefault();
    let emailLogin = document.getElementById("email");
    let pwdLogin = document.getElementById("password");
    let noLogin = false;
    if(emailLogin.value.length == 0){
        emailLogin.style["border"] = "red solid";
        noLogin = true;
    }
    if(pwdLogin.value.length == 0){
        pwdLogin.style["border"] = "red solid";
        noLogin = true;
    }
    if(noLogin){
        document.getElementById("required").style["display"] = "block";
        return;
    }
    
    const user1 = {
        "email": emailLogin.value,
        "password": pwdLogin.value
     };
    fetch("http://localhost:5678/api/users/login", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Access-Control-Allow-Origin':'*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user1)
    }).then(function (res){
        return res.json();
    }).then(function (value){
        console.log(value.token);
        if(value.message == "user not found" || value.token == null){
            return alert("Erreur d'identification")
        }
        window.localStorage.setItem("token", value.token);
        window.location.href = "./index.html";
    }).catch(function (error){
        alert("Wrong mail or password");
    })
});