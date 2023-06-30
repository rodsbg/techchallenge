const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  cpf: { type: String, required: true, unique: true },
  endereco: { type: String, required: true },
});

const Cliente = mongoose.model('Cliente', clienteSchema);

module.exports = Cliente;
