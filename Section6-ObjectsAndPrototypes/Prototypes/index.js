// Construtora -> molde (classe)

// Primeiro o motor do JS procura a nomeCompleto aqui, quando nao acha usa o proto
function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}

const pessoa1 = new Pessoa('Luiz', 'O.'); // <- Pessoa = Funcao construtora
const pessoa2 = new Pessoa('Maria', 'A.'); // <- Pessia = Funcao Construtora

Pessoa.prototype.nomeCompleto = function () {
  return this.nome + ' ' + this.sobrenome;
};

console.dir(pessoa1);
console.dir(pessoa2);
console.dir(pessoa2.nomeCompleto());
