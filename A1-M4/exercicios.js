


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




let idadeInformada = 16;
let idadeEsperada = 18;

const verificarIdade = new Promise((resolve, reject) => {
  if (idadeInformada >= idadeEsperada) {
    resolve("Maior de idade");
  } else {
    reject("Menor de idade");
  }
});

verificarIdade
  .then((mensagem) => {
    console.log(mensagem);
  })
  .catch((erro) => {
    console.log(erro);
  });