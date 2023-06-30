const express = require('express');
const ProdutoController = require('../controllers/produtoController');

const router = express.Router();
const produtoController = new ProdutoController();

router.post('/', produtoController.criarProduto);
router.get('/:categoria', produtoController.buscarProdutosPorCategoria);

module.exports = router;
