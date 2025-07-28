// uma classe possui propriedades e métodos
// classe Pai
class Usuario{
  constructor(id, nome, idade, tipoUsuario){
    this.id = id;
    this.nome = nome;
    this.idade = idade;
    this.tipoUsuario = tipoUsuario
  }
}
module.exports = Usuario;