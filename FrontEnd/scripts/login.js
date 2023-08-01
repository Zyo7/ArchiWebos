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

const user0 = {
    "email": "sophie.bluel@test.tld",
    "password": "S0phie"
};

//connexionAPI(user0);