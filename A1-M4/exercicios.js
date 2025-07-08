// promises para verificar idade

function verificarIdade(idade) {
  return new Promise((resolve, reject) => {
    if (idade >= 18) {
      resolve("🔓 Acesso liberado!");
    } else {
      reject("🔒 Acesso negado. Menor de idade.");
    }
  });
}

// Teste
verificarIdade(15)
  .then(console.log)
  .catch(console.error);


let falaPromessa = "vou te comprar um carro de verdade!"
let falaFinal = "vou te comprar um carro de verdade!" // ou troque para "um carrinho"

// função chamada executor (é uma função que recebe 2 parâmetros: resolve(value) o resolve é o que eu quero capturar no then), e o reject (reason) você chama quando dá errado, e ele vai diretamente no reason

// Toda promise precisa de uma função que resolve (quando dá certo) ou rejeita (quando dá errado)

new Promise(()=>{

})

// mas como eu chamo a promise ? eu chamo o nome da constante e os estados que ela pode executar, imagine que eu pedi comida por uma app (promise), se eu não abrir a porta para receber ela pode até chegar, mas você nunca vai ver ou usar o que veio
// o then é para abrir a porta quando chega, e o catch é para ver o que ocorreu de problema e reagir a isso
const promessaMae = new Promise(()=>{})

// 🧠 Pergunta:
// Por que eu uso só console.log direto no .then() e não uma arrow function como resposta => console.log(resposta)?

// ✅ Porque console.log já é uma função.
// Quando você faz:

// javascript
// Copiar
// Editar
// .then(console.log)
// Você está passando a função console.log diretamente como o que deve ser executado quando a Promise for resolvida.

// Ou seja, é o mesmo que isso:

// javascript
// Copiar
// Editar
// .then((resposta) => {
//   console.log(resposta)
// })
// 🤯 Isso funciona porque...
// O .then() espera uma função como argumento.
// E console.log é uma função.

// Então o JavaScript entende:

// “Ah, quando o .then() for chamado, use console.log e passe o valor como parâmetro”.

// 🧪 Exemplo mais claro:
// Essas duas formas fazem a mesma coisa:

// Forma 1 (com arrow function):
// js
// Copiar
// Editar
// .then(valor => console.log(valor))
// Forma 2 (função direta):
// js
// Copiar
// Editar
// .then(console.log)

// criando código para servidor

const Voyager = {
    nome: "Voyager",
    lancamento: "1977",
    objetivo: "Estudar os planetas exteriores do Sistema Solar",
    status: "Em operação",
    dados: ["Imagens de Júpiter", "Amostras de poeira interestelar", "Dados de radiação cósmica"]
  };
  
  const Curiosity = {
    nome: "Curiosity",
    lancamento: "2011",
    objetivo: "Investigar a habitabilidade de Marte",
    status: "Em operação",
    dados: ["Amostras de solo marciano", "Imagens panorâmicas de Marte", "Dados meteorológicos"]
  };
  
  const Perseverance = {
    nome: "Perseverance",
    lancamento: "2020",
    objetivo: "Procurar sinais de vida microbiana em Marte",
    status: "Em operação",
    dados: ["Amostras de rochas"]
  };
  
  const Hubble = {
    nome: "Hubble",
    lancamento: "1990",
    objetivo: "Observar os planetas e galáxias mais distantes já vistos",
    status: "Em operação",
    dados: ["Dados sobre a expansão do universo"]
  };
  
  const Juno = {
    nome: "Juno",
    lancamento: "2011",
    objetivo: "Estudar Júpiter em detalhes nunca antes vistos",
    status: "Em operação",
    dados: ["Imagens de Júpiter", "Dados sobre o campo magnético de Júpiter", "Informações sobre a atmosfera de Júpiter"]
  };

function enviarDadosParaNasa(sonda) {
  return new Promise((resolve, reject) => {
    if (sonda.dados.length >= 2) {
      resolve("Enviando dados para a NASA...");
    } else {
      reject("Esperando mais dados para enviar.");
    }
  });
}


enviarDadosParaNasa(Juno)
  .then(resposta => console.log(resposta))
  .catch(erro => console.log(erro));


