async function connexionAPI(user){
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
}

const form = document.querySelector('form');
form.addEventListener("submit", (event) => {
    /*
    event.preventDefault();
    const user0 = {
        "email": "sophie.bluel@test.tld",
        "password": "S0phie"
    };
    */
    const user1 = {
        "email": document.getElementById("email").value,
        "password": document.getElementById("password").value
    };
    //user1 == user0 ? connexionAPI(user1) : false;
    connexionAPI(user1);
});