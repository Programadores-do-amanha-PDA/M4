const divResposta = document.getElementById('pokemon');

async function buscarPokemon(nomeDigitado){

  try{
    const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nomeDigitado}`);

    if(!resposta.ok){
      alert('Requisição falha')
    }

    const dados = await resposta.json();
    console.log(dados)

    divResposta.innerHTML = 
    ` <h2> ${dados.name}</h2>
      <img src="${dados.sprites.front_default}" />  
    `
  }
  catch(error){
    alert(error)
  }
  
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