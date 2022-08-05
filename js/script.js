const nomePokemon = document.querySelector('.pokemon_name');
const numeroPokemon = document.querySelector('.pokemon_number');
const imagemPokemon = document.querySelector('.pokemon__image');
const pesquisaPokemon = document.querySelector('.forme_pequisa');
const imput = document.querySelector('.pesquisar');
const btn_prev = document.querySelector('.btn_prev');
const btn_next = document.querySelector('.btn_next');

let bunscaPokemon = 1;


// função pega dados da api e tranforma json
const fetchPokemon = async (pokemon) => { 
        const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    if(APIResponse.status===200){
                // variavel pega o json da api 
                const dados = await APIResponse.json();
                // retona o json com as informações do pokemon 
                return dados;
    }

    //prita dados do objeto no console
    //  console.log(dados);
}


// teste chamado função consumindo api
//fetchPokemon('25');



// função renderiza (desenha o pokemon)
const renderPokemon = async (pokemon) => {
    nomePokemon.innerHTML ='Buscando...';
    numeroPokemon.innerHTML = '';

    // chamado ''json''
    const dados = await fetchPokemon(pokemon);

    if(dados){
            //setando nome do pokemon no html
            imagemPokemon.style.display='block';
            nomePokemon.innerHTML = dados.name;
            numeroPokemon.innerHTML = dados.id;
            imagemPokemon.src = dados['sprites']['versions']['generation-v']['black-white']
            ['animated']['front_default'];
            imput.value='';
    }else{
        imagemPokemon.style.display='none';
        nomePokemon.innerHTML = 'não encontrado :c';
        numeroPokemon.innerHTML = '';
    }


}
// teste renderizando
//renderPokemon('3');

// função pesquisa pokemon
pesquisaPokemon.addEventListener('submit', (event) => {

    event.preventDefault();

    renderPokemon(imput.value.toLowerCase());
});


btn_prev.addEventListener('click', () => {
    if(bunscaPokemon > 1){
        bunscaPokemon -=1;
        renderPokemon(bunscaPokemon);
    }

});


btn_next.addEventListener('click', () => {
    bunscaPokemon +=1;
    renderPokemon(bunscaPokemon);


});

renderPokemon(bunscaPokemon);
