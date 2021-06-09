// receber requisição
// pegar dado no banco de dados
// fazer alguma logica
// retornar

const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World 2');
});

app.post('/', function (req, res){
  res.send('post')
});
 
app.listen(3000);