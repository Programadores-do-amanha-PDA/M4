const Produto = require('../models/Produtos.js');

const produtos = [];

const listarProdutos = (req, res)=>{
 return res.json(produtos);
}

// corrigir o post dessa rota
const criarProduto = (req, res)=>{
  const {nome, preco} = req.body;

  const novoProduto = new Produto(produtos.length + 1, nome, preco);
  produtos.push(novoProduto);
  
  return res.status(201).send("Produto criado com sucesso");
}

const deletarProduto = (req, res)=>{
  const {id} = req.params;

  const index = produtos.findIndex(p => p.id == id);

  if (index === -1){
    return res.status(404).json({mensagem: "Produto não encontrado"});
  }

  const removido = produtos.splice(index, 1);
  res.json({mensagem: "Produto removido com sucesso", removido})
}
module.exports = {listarProdutos, criarProduto, deletarProduto}