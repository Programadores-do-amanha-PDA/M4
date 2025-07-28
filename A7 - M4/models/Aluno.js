// classe Filha que herda característica da classe Pai
// método super é para herdar características de uma classe Pai
const Usuario = require('./Usuario');

class Aluno extends Usuario{
  constructor(id, nome, idade){
    super(id, nome, idade, 'aluno');
  }
}

module.exports = Aluno;
