const express = require('express');
const router = express.Router();
const {listaAlunos, listaFuncionarios} = require('../controllers/AcademiaController.js');

router.get('/alunos-academia', listaAlunos);

router.get('/funcionarios-academia', listaFuncionarios);

module.exports = router;