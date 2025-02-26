const express = require('express');
const app = express();

// CRUD -> CREATE, READ, UPDATE, DELETE
//          POST    GET    PUT   DELETE

// http://meusite.com/ <- GET -> Entregue a pagina /
// http://meusite.com/sobre <- GET -> Entregue a pagina /sobre

app.get('/', (req, res) => {
  res.send(`<form action="/" method = "POST">   
      Nome: <input type= "text" name="nome">
      <button>Enviar</button>
    </form>`);
});

app.post('/', (req, res) => {
  res.send(`Recebi o formulario`);
});

app.get('/contato', (req, res) => {
  res.send('Obrigado por entrar em contato!');
});

app.listen(3000, () => {
  console.log('Acessar http://localhost:3000 ');
  console.log('Servidor executando na porta 3000');
});
