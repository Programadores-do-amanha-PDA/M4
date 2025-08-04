class Avaliacao{
  constructor(id, nome, produtoId, nota, comentario){
    this.id = id;
    this.nome = nome;
    this.produtoId = produtoId;
    this.nota = nota;
    this.comentario = comentario
  }
}
// exportar a classe
module.exports = Avaliacao;