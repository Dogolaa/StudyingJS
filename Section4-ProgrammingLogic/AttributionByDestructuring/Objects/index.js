const pessoa = {
  nome: 'Lucas',
  sobrenome: 'Dogo',
  idade: 23,
  endereco: {
    rua: 'Av Brasil',
    numero: 320,
    bairro: 'Centro',
    pontoDeReferencia: 'Esquina',
  },
};

console.log(pessoa);
console.log(pessoa.nome);

const sobrenome = pessoa.sobrenome;
console.log(sobrenome);

//Atribuicao via desestruturacao
const {
  nome,
  idade,
  endereco: { rua, numero, ...resto },
} = pessoa;
console.log(nome, idade, rua, resto);
