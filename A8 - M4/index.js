// Juntos criaremos uma API que irá conter a rota “/produtos”  (GET), (POST)
// e onde iremos adicionar um método GET que retornará 3 produtos e 
// teremos um método POST que retornará “Produto criado com sucesso”

const express = require('express');

const app = express();

const rotasProdutos = require('./routes/produtos.js');

const port = 3000;

app.use(express.json());

app.use('/produtos', rotasProdutos);

app.listen(port, ()=>{
  console.log(`Servidor rodando na porta ${port}`)
})

