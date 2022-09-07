const result = document.getElementById('result')

fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(json => { 
        for (let i = 0; i < json.length; i++){
            console.log(json[i])
            result.innerHTML += `${json[i].title}<br>`
        }
    })
    

