const express = require('express');
const PedidoController = require('../controllers/pedidoController');

const router = express.Router();
const pedidoController = new PedidoController();

router.post('/', pedidoController.criarPedido);
router.put('/:pedidoId/status', pedidoController.atualizarStatusPedido);

module.exports = router;
