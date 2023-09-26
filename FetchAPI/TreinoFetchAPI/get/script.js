function fetchApiData() { 
    // o elemnto get é padrao quando nao se especifica no fetch
    fetch('https://jsonplaceholder.typicode.com/todos/')
    .then(response => response.json())
    .then(data => {
        const list = document.querySelector("#fill_list"); // declarando a lista fora do laço 'map' para a criação dela ser rodada apenas uma vez, otimizando o desempenho do codigo

        // os dados do map precisam ser unicos a cada rotação do item
        data.map((item) => { 
            const li = document.createElement('li'); // criando uma "tag li" dentro do js
            li.setAttribute('id', item.id) // criando um atributo a "tag li" : o ID
            li.innerHTML = item.title; //inserindo o title dentro da li
            list.appendChild(li); //declarando o li dentro da ul no javascript
        })
    })
    //then é como uma promisse, dentro do then se coloca o codigo que deseja rodar apos a equisiço da API. 

    //tudo que escrevermos aqui sera executado sem esperar a api ser processada. o fetch é uma função asincrona.
}