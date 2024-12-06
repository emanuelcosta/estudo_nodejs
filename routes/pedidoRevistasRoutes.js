const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;
const {add, getAll} = require('../controllers/Pedidos_revistasController');

// Criar novo membro
router.post('/pedidos_revistas', add );

router.get('/pedidos_revistas', getAll )

module.exports = router;
