const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(`<form action="/" method = "POST">   
      Nome: <input type= "text" name="qualquercoisa"><br>
      Outro campo: <input type= "text" name="outrocampo"><br>
      <button>Enviar</button>
    </form>`);
});

app.post('/', (req, res) => {
  console.log(req.body.qualquercoisa);
  console.log(req.body.outrocampo);
  console.log(req.body);
  res.send(`Recebi o formulario`);
});

app.get('/testes/:idUsuarios?/:parametro?', (req, res) => {
  // /profiles/3
  // /profiles/?nome1=valor&sobrenome=valor&...
  //

  console.log(req.params);
  console.log(req.query);
  //res.send(req.params);
  res.send(req.query.nome);
});

app.listen(3000, () => {
  console.log('Acessar http://localhost:3000 ');
  console.log('Servidor executando na porta 3000');
});
