const express = require('express');
const app = express();
const port = 3000;

const rotasProdutos = require('./routes/produtos');
const rotasAvaliacoes = require('./routes/avaliacoes'); // 👈 nova rota

app.use(express.json());

app.use('/produtos', rotasProdutos);
app.use('/avaliacoes', rotasAvaliacoes); // 👈 nova rota

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

// localhost:3000/produtos/deletar-produtos/1
