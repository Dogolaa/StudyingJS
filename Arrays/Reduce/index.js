//Reduce é versatil, acaba dando para fazer o mesmo que map e filter, mas nao é uma boa pratica
//Diferente de Map e Filter, Reduce recebe um acumulador na funcao anonima e pode receber um valor inicial

//Some todos os numeros
//Retorne um array com os pares (Filter)
//Retorne um array com o dobro dos valores (Map)

const numeros = [67, 56, 3, 24, 68, 8, 12, 43, 78, 23, 74, 1, 2, 4, 7];

const total = numeros.reduce(function (acumulador, valor, indice, array) {
  acumulador += valor;
  return acumulador;
}, 0); // 0 valor inicial

console.log(total);

const pares = numeros.reduce(function (acumulador, valor, indice, array) {
  if (valor % 2 === 0) acumulador.push(valor);
  return acumulador;
}, []);
console.log(pares);

const dobro = numeros.reduce(function (acumulador, valor, indice, array) {
  acumulador.push(valor * 2);
  return acumulador;
}, []);
console.log(dobro);

//Retorne a pessoa mais velha
const pessoas = [
  { nome: 'Lucas', idade: 23 },
  { nome: 'Luizmael', idade: 34 },
  { nome: 'Luc', idade: 83 },
  { nome: 'Lua', idade: 26 },
  { nome: 'Lucs', idade: 93 },
  { nome: 'Saca', idade: 32 },
];

const maisVelha = pessoas.reduce(function (acumulador, valor, indice, array) {
  if (acumulador.idade > valor.idade) {
    return acumulador;
  }

  return valor;
}, 0);
console.log(maisVelha);
