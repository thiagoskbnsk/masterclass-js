const express = require('express');
const app = express();

let balance = 0;
let history = [];

app.get('/historico', function (req, res) {
  res.send(history.toString());
});

app.post('/saida', (req, res) => {
  balance -= 5;
  history.push('Removido R$5,00');

  res.send('Removido R$5,00');
});

app.post('/entrada', (req, res) => {
  balance += 5;
  history.push('Adicionado R$5,00');

  res.send('Adicionado R$5,00');
});

app.get('/total', (req, res) => {
  history.push('Requisitado total');
  res.send(`Seu total é de R$${balance.toFixed(2)}`);
});

app.listen(3000);