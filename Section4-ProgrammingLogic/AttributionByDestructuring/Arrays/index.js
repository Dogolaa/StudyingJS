// ... rest, ... spread
const numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900];
const [primeiroNumero, segundoNumero, , quartoNumero, ...resto] = numeros;
console.log(primeiroNumero, segundoNumero, quartoNumero);
console.log(resto);

const numeros2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(numeros2[1][0]);
const [, [, , seis]] = numeros2;
const [lista1, lista2, lista3] = numeros2;
console.log(seis);
console.log(lista3[2]);
