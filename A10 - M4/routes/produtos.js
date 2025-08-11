const express = require('express');
const router = express.Router();

const {listarProdutos, criarProduto} = require('../controllers/ProdutoController.js');

router.get('/listar-produtos', listarProdutos);

router.post('/criar-produtos', criarProduto);

// método put, método delete

module.exports = router;