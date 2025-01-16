// return
// retorna um valor
// Termina a funcao

function soma(a, b) {
  return a + b;
}

// Nao retorna nada
function soma2(a, b) {
  console.log(a + b);
}

console.log(soma(2, 7));

function criaPessoa(nome, sobrenome) {
  return { nome: nome, sobrenome: sobrenome };
}

const p1 = criaPessoa('Lucas', 'Dogo');

console.log(p1);

function falaFrase(comeco) {
  function falaResto(resto) {
    return comeco + ' ' + resto;
  }

  return falaResto; //retorna a funcao sem executar ela
}

const fala = falaFrase('Ola');
const resto = fala('mundo!');

console.log(resto);

function criaMultiplicador(multiplicador) {
  return function (n) {
    return n * multiplicador;
  };
}

const duplica = criaMultiplicador(2);
console.log(duplica(2));
