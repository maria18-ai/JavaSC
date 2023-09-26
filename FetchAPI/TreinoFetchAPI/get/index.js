const api = 'http://localhost:21262/'

fetch(api)
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.error('erro a mostrar os dados da api', err))
