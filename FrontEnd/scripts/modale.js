async function getDataAPI(data){
    await fetch("http://localhost:5678/api/works", {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(function (res2){
        //let test2 = res2.json();
        //console.log(test2);
        return res2.json();
    }).then(function (value){
        console.log(value[data]);
        return value[data].imageUrl;
        //for(let count =0; count < value.length; count++){}
    }).catch(function (error){
        alert("Non connecté");
    })
}