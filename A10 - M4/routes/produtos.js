const express = require('express');
const router = express.Router();

const {listarProdutos, criarProduto, deletarProduto} = require('../controllers/ProdutoController.js');

router.get('/listar-produtos', listarProdutos);

router.post('/criar-produtos', criarProduto);

router.delete('/deletar-produtos/:id', deletarProduto);

// método put, método delete

module.exports = router;