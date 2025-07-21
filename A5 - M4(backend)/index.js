const express = require('express');
const app = express();
const port = 3000;
const routes = require('./route');

app.use(routes);

app.listen(3000, ()=>{
  console.log(`Servidor rodando na porta ${port}`)
});