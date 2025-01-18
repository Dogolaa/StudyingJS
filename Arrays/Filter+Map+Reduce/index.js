//Retorne a soma do dobro de todos os pares
// Filtrar pares
// Dobrar os valores
// Reduzir (somar tudo)

const numeros = [67, 56, 3, 24, 68, 8, 12, 43, 78, 23, 74, 1, 2, 4, 7];
// const numerosPares = numeros
//   .filter(function (valor) {
//     return valor % 2 === 0;
//   })
//   .map(function (valor) {
//     return valor * 2;
//   })
//   .reduce(function (acumulador, valor) {
//     return acumulador + valor;
//   }, 0);

//Convertendo para Arrow Functions

const numerosPares = numeros
  .filter((valor) => valor % 2 === 0)
  .map((valor) => valor * 2)
  .reduce((acumulador, valor) => acumulador + valor, 0);

console.log(numerosPares);
