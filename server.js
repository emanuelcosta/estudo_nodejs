const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors'); // Importando o CORS
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Configurando CORS para permitir requisições de origens específicas ou de qualquer origem

app.use(cors({
  origin: process.env.URL_FRONTEND, // Permite somente o frontend no localhost:8080
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Permite os métodos
  allowedHeaders: ['Content-Type', 'Authorization'] // Permite os cabeçalhos específicos
}));

// Middleware
app.use(bodyParser.json());

// Conexão com o MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado ao MongoDB Atlas'))
  .catch((err) => console.error('Erro ao conectar com MongoDB:', err));

// Importando as rotas
const membroRoutes = require('./routes/membroRoutes.js');
const pedidoRevistasRoutes = require('./routes/pedidoRevistasRoutes.js');

// Usando as rotas para todas as rotas que começam com /api
app.use('/api', membroRoutes);
app.use('/api', pedidoRevistasRoutes);

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
