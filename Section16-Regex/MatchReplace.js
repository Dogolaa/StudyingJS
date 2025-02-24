const { texto } = require('./base');
const regExp1 = /João|maria/gi;

console.log(texto.match(regExp1));
console.log(texto.replace(/João/gi, 'Felipe'));

//Coloca as coisas entre coisas
console.log(texto.replace(/(João|Maria)/gi, '<p>$1</p>'));

// Usa uma funcao
console.log(
  texto.replace(/(João|Maria)/gi, function (input) {
    return input.toUpperCase();
  })
);
