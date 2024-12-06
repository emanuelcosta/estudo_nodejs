const express = require('express');
const router = express.Router();
const PedidoRevista = require('../models/pedido_revista');
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;

// Criar novo membro
router.post('/pedidos_revistas', async (req, res) => {
  try {
    const { nome, classe, tipoRevista, quantidade } = req.body;
    
    const novoPedido = new PedidoRevista({
      nome,
      classe,
      tipoRevista,
      quantidade
    });

    await novoPedido.save();
    res.status(201).json(novoPedido);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao salvar pedido de revista.', error });
  }
});

router.get('/pedidos_revistas', async (req, res) => {
  try {
   
    
    res.status(201).json('teste');
  } catch (error) {
    res.status(400).json({ message: 'Erro ao salvar pedido de revista.', error });
  }
});

module.exports = router;
