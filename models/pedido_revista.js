const mongoose = require('mongoose');

const pedidoRevistaSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  classe: {
    type: Date,
    required: true,
    enum: ['Adultos', 'Jovens', 'Crianças']
  },
  tipo_revista: {
    type: String,
    enum: ['Aluno', 'Professor'],
    required: true
  },
  quantidade: {
    type: Number,
    required: true
  },
}, { 
  timestamps: true,
  collection: 'pedidos_revistas_ebs'
 });

module.exports = mongoose.model('Pedido', pedidoRevistaSchema);
