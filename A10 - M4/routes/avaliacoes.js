const express = require('express');
const router = express.Router();

const {listarAvaliacoes, criarAvaliacao} = require('../controllers/AvaliacaoController.js');
const verificarAvaliacao = require('../middlewares/verificarAvaliacao.js');

router.get('/listar-avaliacoes', listarAvaliacoes);

router.post('/criar-avaliacoes', verificarAvaliacao, criarAvaliacao);

// localhost:3000/avaliacoes/listar-avaliacoes
// localhost:3000/avaliacoes/criar-avaliacoes
module.exports = router;