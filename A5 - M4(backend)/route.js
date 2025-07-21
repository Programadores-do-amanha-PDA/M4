const {funcionariosAcademia, alunosAcademia} = require('./banco');
const express = require('express');
const router = express.Router();

router.get('/alunos-academia', (req, res)=>{
  res.json(alunosAcademia);
})

router.get('/funcionarios-academia', (req, res)=>{
  res.json(funcionariosAcademia);
})

module.exports = router;