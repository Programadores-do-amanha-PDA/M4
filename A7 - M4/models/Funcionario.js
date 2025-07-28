// classe Filha que herda característica da classe Pai
// método super é para herdar características de uma classe Pai
const Usuario = require('./Usuario');

class Funcionario extends Usuario{
  constructor(id, nome, idade){
    super(id, nome, idade, 'funcionario');
  }
}

module.exports = Funcionario;