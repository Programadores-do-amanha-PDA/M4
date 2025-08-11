const Produto = require('../models/Produtos.js');

const produtos = [
  new Produto(1, 'Camiseta', 'R$ 49,90'),
  new Produto(2, 'Camiseta2', 'R$ 49,90'),
  new Produto(3, 'Camiseta3', 'R$ 49,90'),
];

const listarProdutos = (req, res)=>{
 return res.json(produtos);
}

// corrigir o post dessa rota
const criarProduto = (req, res)=>{
  return res.status(201).send("Produto criado com sucesso");
}

module.exports = {listarProdutos, criarProduto}