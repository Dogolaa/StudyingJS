// Filter filtra o array '-' e retorna um array com a mesma quantidade de elementos ou menos
// No filter retornamos verdadeiro quando queremos adicionar um valor no array e false quando nao queremos

//Retorne os numeros maiores que 10
const numero = [67, 56, 3, 24, 68, 8, 12, 43, 78, 23, 74, 1, 2, 4, 7];

// function callbackFilter(valor, indice, array) {
//   return valor > 10;
// }

const numerosFiltrados = numero.filter((valor) => valor > 10);
console.log(numerosFiltrados);

// Rtorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a
const pessoas = [
  { nome: 'Lucas', idade: 23 },
  { nome: 'Luizmael', idade: 34 },
  { nome: 'Luc', idade: 83 },
  { nome: 'Lua', idade: 26 },
  { nome: 'Lucs', idade: 93 },
  { nome: 'Saca', idade: 32 },
];

const pessoasComNomeGrande = pessoas.filter((obj) => obj.nome.length >= 5);
const pessoasComMaisDe50 = pessoas.filter((obj) => obj.idade > 50);
const pessoasNomeTerminaComA = pessoas.filter((obj) =>
  obj.nome.toLowerCase().endsWith('a')
);

console.log(pessoasComNomeGrande);
console.log(pessoasComMaisDe50);
console.log(pessoasNomeTerminaComA);
