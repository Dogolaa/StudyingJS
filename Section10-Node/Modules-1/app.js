//const mod1 = require('./mod1');
// const falaNome = require('./mod1').falaNome;
const { nome, sobrenome, falaNome } = require('./mod1');

// console.log(mod1.falaNome());
console.log(falaNome());

const { Pessoa } = require('./mod1');
const path = require('path');
const axios = require('axios');

axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
  .then((response) => console.log(response.data))
  .catch((e) => {
    console.log(e);
  });
