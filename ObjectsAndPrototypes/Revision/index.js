const pessoa = {
  nome: 'Lucas',
  sobrenome: 'Dogo',
};

const sobrenome = 'sobrenome';
console.log(pessoa.sobrenome);
console.log(pessoa['nome']);
console.log(pessoa[sobrenome]);

const pessoa1 = new Object();
pessoa1.nome = 'Lucas';
pessoa1.sobrenome = 'Dogo';
pessoa1.idade = 23;
//delete pessoa1.nome
console.log(pessoa1);

pessoa1.getDataNascimento = function () {
  const dataAtual = new Date();
  return dataAtual.getFullYear() - this.idade;
};

console.log(pessoa1.getDataNascimento());
console.log('#############');

for (let chaves in pessoa1) {
  console.log(chaves);
}

//   Factory Functions // Constructor Functions // Classes
function criaPessoa(nome, sobrenome) {
  return {
    nome,
    sobrenome,
    get nomeCompleto() {
      return `${nome} ${sobrenome}`;
    },
  };
}

const p1 = criaPessoa('Ingrid', 'Danielli');
console.log(p1.nomeCompleto);

function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;

  //return this
}

//New cria um objeto vazio e atrela a palavra this a esse objetos
const p2 = new Pessoa('Felipe', 'Dogo');

console.log(p2);
