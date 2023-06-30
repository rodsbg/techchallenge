const Pedido = require('../models/pedido');

class PedidoController {
  async criarPedido(req, res) {
    try {
      const { clienteId, produtos } = req.body;

      const pedido = await Pedido.create({ cliente: clienteId, produtos });

      return res.status(201).json(pedido);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao criar pedido' });
    }
  }

  async atualizarStatusPedido(req, res) {
    try {
      const { pedidoId } = req.params;
      const { status } = req.body;

      const pedido = await Pedido.findByIdAndUpdate(
        pedidoId,
        { status },
        { new: true }
      );

      return res.status(200).json(pedido);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao atualizar status do pedido' });
    }
  }
}

module.exports = PedidoController;
