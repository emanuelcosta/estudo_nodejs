const express = require('express');
const router = express.Router();
const Membro = require('../models/membro');
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;

// Criar novo membro
router.post('/membros', async (req, res) => {
  try {
    const { nome, dataNascimento, numeroRol, estadoCivil, naturalidade, situacao } = req.body;
    
    const novoMembro = new Membro({
      nome,
      dataNascimento,
      numeroRol,
      estadoCivil,
      naturalidade,
      situacao
    });

    await novoMembro.save();
    res.status(201).json(novoMembro);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao criar membro', error });
  }
});

// Obter todos os membros
router.get('/membros', async (req, res) => {
  console.log('acessou aqui...');
  try {
    const membros = await Membro.find();
    res.status(200).json(membros);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao obter membros', error });
  }
});

// Obter membro por número de rol
router.get('/membros/:numeroRol', async (req, res) => {
  try {
    const membro = await Membro.findOne({ numeroRol: req.params.numeroRol });
    if (!membro) {
      return res.status(404).json({ message: 'Membro não encontrado' });
    }
    res.status(200).json(membro);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar membro', error });
  }
});

// Atualizar membro
router.put('/membros/:numeroRol', async (req, res) => {
  try {
    const membro = await Membro.findOneAndUpdate(
      { numeroRol: req.params.numeroRol },
      req.body,
      { new: true }
    );
    
    if (!membro) {
      return res.status(404).json({ message: 'Membro não encontrado' });
    }
    
    res.status(200).json(membro);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar membro', error });
  }
});

// Deletar membro
router.delete('/membros/:id', async (req, res) => {
  const membroId = req.params.id;

  if (!mongoose.isValidObjectId(membroId)) {
    return res.status(400).json({ message: 'ID inválido' });
  }

  try {
    const membro = await Membro.findOneAndDelete({ _id: new ObjectId(membroId) });

    if (!membro) {
      return res.status(404).json({ message: 'Membro não encontrado' });
    }

    res.status(200).json({ message: 'Membro deletado' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao deletar membro', error });
  }
});

module.exports = router;
