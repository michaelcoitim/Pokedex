const nomePokemon = document.querySelector('.pokemon_name');
const numeroPokemon = document.querySelector('.pokemon_number');


// função pega dados da api e tranforma json
const fetchPokemon = async (pokemon) => { 
        const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        // variavel pega o json da api 
        const dados = await APIResponse.json();
        // retona o json com as informações do pokemon 
        return dados;

    //prita dados do objeto no console
    //  console.log(dados);
}


// teste chamado função consumindo api
//fetchPokemon('25');



// função renderiza (desenha o pokemon)
const renderPokemon = async (pokemon) => {
    // chamado ''json''
    const dados = await fetchPokemon(pokemon);

    //setando nome do pokemon no html
        nomePokemon.innerHTML = dados.name;
        numeroPokemon.innerHTML = dados.id;
}
// teste renderizando
renderPokemon('pichu');