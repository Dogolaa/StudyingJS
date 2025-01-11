// const pessoa1 = {
//   nome: 'Luiz',
//   sobrenome: 'Miranda',
//   idade: 25,
// };

// const pessoa2 = {
//   nome: 'Maria',
//   sobrenome: 'Oliveira',
//   idade: 55,
// };

// console.log(pessoa1.nome);
// console.log(pessoa2.nome);

function criaPessoa(nome, sobrenome, idade) {
  return {
    nome: nome,
    sobrenome: sobrenome,
    idade: idade,
  };
}

//tambem funciona

// function criaPessoa(nome, sobrenome, idade) {
//   return {
//     nome,
//     sobrenome,
//     idade,
//   };
// }

const pessoa1 = criaPessoa('Lucas', 'Dogo', 23);

console.log(pessoa1.nome);

const pessoa2 = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 25,

  fala() {
    console.log(`${this.nome} disse oi`);
  },

  incrementaIdade() {
    ++this.idade;
  },
};

pessoa2.fala();
pessoa2.incrementaIdade();
console.log(pessoa2.idade);
