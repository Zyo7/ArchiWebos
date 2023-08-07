//let token = window.localStorage.getItem("token"); Ne sert que en condition if/else true:false

async function getDataAPI2(data){
    await fetch("http://localhost:5678/api/works", {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(function (res2){
        return res2.json();
    }).then(function (value){
        console.log(value[data]);
        return value;
    }).catch(function (error){
        alert("Non connecté");
    })
}

//let token = window.localStorage.clear; Log OUT
