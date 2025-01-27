const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');

function meuMiddleware(req, res, next) {
  req.session = { nome: 'Lucas', sobrenome: 'Dogo' };

  next();
}

//route.get('/', meuMiddleware, homeController.paginaInicial);

route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost);

module.exports = route;
