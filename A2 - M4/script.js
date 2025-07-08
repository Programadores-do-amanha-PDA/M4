let falaPromessa = "quando voltar a gente compra";
let falaFinal = "não vai dar para comprar não";

const promessa = new Promise((resolve, reject)=>{
  if(falaPromessa != falaFinal){
    reject('Não foi essa a promessa')
  }else{
    resolve("Obrigada mãe")
  }
})

promessa
  .then((mensagem)=>{
    console.log(mensagem)
  })
  .catch((error)=>{
    console.log(error)
  })


