const express = require('express');

const app = express();

const port = 3000
// GET, CREATE (POST), UPDATE (PUT), DELETE (DELETE)

const employee = [
  { nome: "Beatriz", salario: 10000 },
  { nome: "Davi", salario: 3500 },
  { nome: "Tábata", salario: 5000 }
]

app.get('/employee-salary', (req, res) => {
  const acimaDe4k = [];

  for (let i = 0; i <employee.length; i++) {
    if(employee[i].salario > 4000){
      acimaDe4k.push(employee[i])
    }
  }
  res.json(acimaDe4k)
});

app.listen(port, () => {
  console.log('exemplo de porta padrão')
})


