const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;

const membroSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  dataNascimento: {
    type: Date,
    required: true
  },
  numeroRol: {
    type: String,
    required: true,
    unique: true
  },
  estadoCivil: {
    type: String,
    enum: ['Solteiro', 'Casado', 'Divorciado', 'Viúvo'],
    required: true
  },
  naturalidade: {
    type: String,
    required: true
  },
  situacao: {
    type: String,
    enum: ['Ativo', 'Inativo'],
    required: true
  }
}, { 
  timestamps: true,
  collection: 'membros'
 });

module.exports = mongoose.model('Membro', membroSchema);
