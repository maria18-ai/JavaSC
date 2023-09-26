const nomeUsuario = document.querySelector("#nomeUsuario") //constante usando dom para pegar os dados do elemento html com id "nomeUsuario"

function trazerRepositorios() { //funsao chamada a apertar o botao na interface so projeto 
    axios // chamando a biblioteca que vamos utilizar para tratamento da api 
        .get(`http://api.github.com/users/${nomeUsuario.value}/repos`) // metodo get para tratar a api com o paramtro sendo a propia api concatenada a constante que esta com a resposta do usuario, para deixar dinamico o site
        .then((response) => { // metodo then com a resposta (response/res) da api como parametro
            const repos = response.data; // declarando uma constante para pegar os dados da resposta da api
            console.log(repos); 

            var lista = document.querySelector("#repos");// variavel lista usando dom para pegar dados de um elemento html

            for(i in repos){ // uma logica de repetição para mostrar os dados: para (i esta na repos ( dados da api)) ?
                console.log(repos[i]) // entao mostra no console os dados da api no indice i 
                var elemento = document.createElement("li"); // criando o elemento li da lista 
                elemento.innerHTML = JSON.stringify(repos[i].url); // colocando os dados na lista para a aparição no site, os transformando em json para melhor leitura da parte do navegador (constante repos com os dados da api no indice i, e pedindo a url desses dados fornecidos)

                lista.appendChild(elemento); // declarando o li objeto dentro da lista 
            }
        })
        .catch(error => {
            console.log(error) // tratamento de erros 
        })
}