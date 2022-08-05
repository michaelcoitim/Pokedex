const fetchPokemon = async (pokemon) =>{

    const APIResponse= await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    // variavel pega o json da api 
    const dados =await APIResponse.json();
    // retona o json com as informações do pokemon 
    return data;

    //prita dados do objeto no console
    //console.log(dados);
}
// teste chamado função consumindo api
fetchPokemon('25');