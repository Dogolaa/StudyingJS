// as funcoes com a palavra function tem uma variavel chamada arguments que sustenta todos os argumentos enviados
function funcao() {
  console.log('Oie');
  console.log(arguments);
  console.log(arguments[0]);
}
funcao('Valor', 1, 2, 3, 4); // da pra enviar um argumento mesmo que a funcao nao espere um parametro

function somaTudo() {
  let total = 0;
  for (let argumento of arguments) {
    total += argumento;
  }
  console.log(total);
}

somaTudo(1, 2, 3, 4, 5, 6, 7, 8, 9);

// posso definir um valor para os parametros, caso na chamada ele nao seja enviado
function defineValor(a, b = 0) {
  console.log(a + b);
}

defineValor(2);

//com desestruturacao

function desestrutura({ nome, sobrenome, idade }) {
  console.log(nome, sobrenome, idade);
}

desestrutura({ nome: 'Lucas', sobrenome: 'Dogo', idade: '23' });

//da pra usar rest operator
function conta(operador, acumulador, ...numeros) {
  for (let numero of numeros) {
    if (operador === '+') acumulador += numero;
    if (operador === '-') acumulador -= numero;
    if (operador === '/') acumulador /= numero;
    if (operador === '*') acumulador *= numero;
  }
  console.log(acumulador);
}

conta('+', 0, 20, 30, 40, 50);
