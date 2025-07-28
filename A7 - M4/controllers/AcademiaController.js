const Aluno = require('../models/Aluno.js');
const Funcionario = require('../models/Funcionario.js');

const funcionarios = [];
const alunos = [];

function listaAlunos(req, res) {
  alunos.push(
    new Aluno(1, "Tábata", 28),
    new Aluno(2, "Beatriz", 25),
    new Aluno(3, "Nyvea", 15)
  )
 return res.json(alunos);
}

function listaFuncionarios(req, res) {
  funcionarios.push(
    new Funcionario(1, "Daniel", 17),
    new Funcionario(2, "Beatriz Rezende", 16),
    new Funcionario(3, "João", 16)
  )
 return res.json(funcionarios);
};

module.exports = { listaAlunos, listaFuncionarios }