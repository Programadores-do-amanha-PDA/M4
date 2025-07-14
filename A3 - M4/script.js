const divResposta = document.getElementById('pokemon');

function buscarPokemon(nomeDigitado){
  fetch(`https://pokeapi.co/api/v2/pokemon/${nomeDigitado}`)
  .then(resposta => {
    if(!resposta.ok){
      alert('Pokémon não encontrado')
    }
    return resposta.json()
    })
    .then(dados =>{
      console.log(dados.sprites.front_default)

      divResposta.innerHTML = 
      `<h2>${dados.name}</h2>
      <img src="${dados.sprites.front_default}"/>
      <p>Peso: ${dados.weight}</p>
      `
    })

  .catch((erro)=>{
    console.log(erro)
  })
}

const buttonBuscar = document.getElementById('btn-buscar');
const pokemonsPermitidos = ['ditto', 'charmander', 'mewto', 'lapras'];


buttonBuscar.addEventListener('click', function(){
  const nomeDigitado = document.getElementById('input-pokemon').value.toLowerCase();

  if(pokemonsPermitidos.includes(nomeDigitado)){
    buscarPokemon(nomeDigitado);
  }else{
    divResposta.innerText = `Só é possível buscar por: Ditto, Charmander, Mewtwo ou Lapras`
  }

})