const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;
const {store, getAll} = require('../controllers/Pedidos_revistasController');

// Criar novo membro
router.post('/pedidos_revistas', store );

router.get('/pedidos_revistas', getAll )

module.exports = router;
