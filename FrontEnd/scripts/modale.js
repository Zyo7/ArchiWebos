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
