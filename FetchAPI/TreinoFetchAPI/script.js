
function showPokemonData() { 
    const askerNumberPokemon = document.querySelector("#pokeNumbers");
    const apiPokemon = ` https://pokeapi.co/api/v2/pokemon/${askerNumberPokemon}`;

    fetch(apiPokemon)
    .then(res => {
        if (!res.ok) {
            throw new Error(`Erro ao buscar os dados da API: ${res.statusText}`);
        };
        return res.json();
    })
    .then(data => {
        console.log(data)
        
        const pokemonName = data.name;
        const pokemonHeight = data.height;
        const pokemonWeight = data.weight;
        const pokemonAbilities = data.abilities.map(ability => ability.ability.name).json(', ');

        const pokemonInfosPlace = document.querySelector("#pokemon-info");

        pokemonInfosPlace.innerHTML = `Seu Pokemon: <br> 
        Nome: ${pokemonName} <br>
        Altura: ${pokemonHeight} <br> 
        Peso: ${pokemonWeight} <br>
        Habilidades: ${pokemonAbilities}`
    })
    .catch(err => console.error("Erro a mostrar os dados", err));
}


