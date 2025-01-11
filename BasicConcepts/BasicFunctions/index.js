function saudacao(nome) {
  console.log(`Hello World ${nome}!`);
  return 123456;
}

const nome = 'Lucas';
saudacao(nome);

const variavel = saudacao('Lucas');
console.log(variavel);

function soma(x, y) {
  const resultado = x + y;
  return resultado;
}

console.log(soma(2, 2));

//funcao anonima

const raiz = function (n) {
  return n ** 0.5;
};

console.log(raiz(9));

// arrow function

/**
 *
 * @param {*} n
 * @returns
 *
 * Arrow function de maneira completa comentada e de maneira simplificada em seguida
 */

// const subtracao = (n) => {
//   return n - 0.5;
// };

const subtracao = (n) => n - 0.5;

console.log(subtracao(9));
