const Produto = require('../models/produto');

class ProdutoController {
  async criarProduto(req, res) {
    try {
      const { nome, categoria, preco } = req.body;

      const produto = await Produto.create({ nome, categoria, preco });

      return res.status(201).json(produto);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao criar produto' });
    }
  }

  async buscarProdutosPorCategoria(req, res) {
    try {
      const categoria = req.params.categoria;

      const produtos = await Produto.find({ categoria });

      return res.status(200).json(produtos);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao buscar produtos' });
    }
  }
}

module.exports = ProdutoController;
