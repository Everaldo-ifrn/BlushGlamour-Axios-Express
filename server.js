const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/auth');

const app = express();
const PORT = 3000;

// Middleware para habilitar o CORS
app.use(cors());

// Middleware para ler JSON nas requisições
app.use(bodyParser.json());

// Rotas
app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
