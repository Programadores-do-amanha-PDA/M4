function verificarAvaliacao(req, res, next) {
  const { nome, produtoId, nota, comentario } = req.body;

  if (!nome || !produtoId || !nota || !comentario) {
    return res.status(400).json({ erro: "Todos os campos são obrigatórios." });
  }

  if (typeof nota !== "number" || nota < 1 || nota > 5) {
    return res.status(400).json({ erro: "A nota deve ser um número entre 1 e 5." });
  }

  next(); // se passou por todas as validações, segue para o controller
}

module.exports = verificarAvaliacao;
