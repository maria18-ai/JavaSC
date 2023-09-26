/*const data = {
    title: 'Dudinha',
    body: "Que sono pqp",
    id: 1
}

function showDatas() {
    axios.post('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
        const respo = res.data
        console.log("Sucesso a adicionar os dados", respo)
    })
}*/

const url = 'https://jsonplaceholder.typicode.com/users';
const data = {
    title: "Dudao",
    body: "mds nao suporto mais estudarrrrr",
    userId: 1
}

fetch(url, {
    method: "POST",
    headers: {
        'Content-type' : 'application/json'
    }, 
    body: JSON.stringify(data)
})
.then(res => res.json)
.then(result => console.log("Dados enviados", result))




