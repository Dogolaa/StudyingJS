const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');

app.use(express.urlencoded({ extended: true }));
app.use(routes);
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.get('/testes/:idUsuarios?/:parametro?', (req, res) => {
  console.log(req.params);
  console.log(req.query);
  //res.send(req.params);
  res.send(req.query.nome);
});

app.listen(3000, () => {
  console.log('Acessar http://localhost:3000 ');
  console.log('Servidor executando na porta 3000');
});
