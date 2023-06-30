const express = require('express');
const ClienteController = require('../controladores/clienteController');

const router = express.Router();
const clienteController = new ClienteController();

router.post('/clientes', clienteController.criarCliente.bind(clienteController));

module.exports = router;
