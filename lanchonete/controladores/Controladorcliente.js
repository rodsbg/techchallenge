const Cliente = require('../models/cliente');

class ClienteController {
  async criarCliente(req, res) {
    try {
      const { nome, cpf, endereco } = req.body;

      // Validação do CPF
      const cpfValido = this.validarCPF(cpf);
      if (!cpfValido) {
        return res.status(400).json({ error: 'CPF inválido' });
      }

      const cliente = await Cliente.create({ nome, cpf, endereco });

      return res.status(201).json(cliente);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao criar cliente' });
    }
  }

  validarCPF(cpf) {
    // Implementação da validação do CPF
    return true;
  }
}

module.exports = ClienteController;