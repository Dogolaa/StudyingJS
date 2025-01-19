function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;
  this.estoque = estoque;

  Object.defineProperty(this, 'estoque', {
    enumerable: true, // mostra a chave
    value: estoque, //valor
    writable: false, // pode alterar ou nao o valor
    configurable: false, // pode reconfigurar ou nao a chave
  });
}

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 50000; // writable nao deixa
delete p1.estoque; // configurable nao deixa
console.log(p1);

console.log(Object.keys(p1)); // enurable deixa a chave aparecer

for (let chave in p1) {
  console.log(chave); // enurable deixa a chave aparecer
}

function Produto2(nome, preco, estoque) {
  Object.defineProperties(this, {
    nome: {
      enumerable: true, // mostra a chave
      value: nome, //valor
      writable: false, // pode alterar ou nao o valor
      configurable: false, // pode reconfigurar ou nao a chave
    },
    preco: {
      enumerable: true, // mostra a chave
      value: preco, //valor
      writable: false, // pode alterar ou nao o valor
      configurable: false, // pode reconfigurar ou nao a chave
    },
    estoque: {
      enumerable: true, // mostra a chave
      value: estoque, //valor
      writable: false, // pode alterar ou nao o valor
      configurable: false, // pode reconfigurar ou nao a chave
    },
  });
}

const p2 = new Produto2('Camiseta', 20, 3);
p2.estoque = 50000; // writable nao deixa
delete p2.estoque; // configurable nao deixa
console.log(p2);

console.log(Object.keys(p2)); // enurable deixa a chave aparecer

for (let chave in p2) {
  console.log(chave); // enurable deixa a chave aparecer
}
