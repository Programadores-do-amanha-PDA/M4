const Avaliacao = require('../models/Avaliacao.js');
const avaliacoes = [];

// listar informações
const listarAvaliacoes = (req, res)=>{
  res.json(avaliacoes);
}
// criar novas avaliações
const criarAvaliacao = (req, res)=>{
  // post
  const {nome, produtoId, nota, comentario} = req.body;
  const nova = new Avaliacao(avaliacoes.length + 1, nome, produtoId, nota, comentario);
  avaliacoes.push(nova);
  res.status(201).json(nova);
}

module.exports = {listarAvaliacoes, criarAvaliacao}