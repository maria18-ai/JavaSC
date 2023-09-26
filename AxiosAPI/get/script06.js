// Variáveis 
const userID = document.getElementById('idUser');

// Função 
function showUsers() {
    axios 
        .get(`https://jsonplaceholder.typicode.com/posts?userId=${userID.value}`)
        .then(res => {
            const respo = res.data;
            console.log(respo)

            var list = document.getElementById('fillList');

            while (list.firstChild) {
                list.removeChild(list.firstChild)
            }
            
            for (var i = 0; i < respo.length; i++) {
                let li = document.createElement('li')
                li.innerHTML = JSON.stringify(respo[i].title) // Use respo[i] em vez de res
                list.appendChild(li);

            }
        })

        .catch(err => {
            console.error("Erro a mostrar os dados pedidos.", err);
        })
}
