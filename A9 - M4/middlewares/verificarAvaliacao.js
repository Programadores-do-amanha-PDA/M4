function verificarAvaliacao(req, res, next){

  if(!nome || !produtoId || !nota || !comentario){
    return res.status(400).json({erro: "Todos os campos devem ser obrigatórios"})
  }
  next();
}

module.export = verificarAvaliacao;