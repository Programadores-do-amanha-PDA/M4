const express = require('express');

const app = express();

const port = 3000;

app.use(express.json());

const academiaRoutes = require('./routes/AcademiaRoutes.js');


app.use(academiaRoutes);

app.listen(port, ()=>{
  console.log(`Servidor rodando na porta ${port}`)
})