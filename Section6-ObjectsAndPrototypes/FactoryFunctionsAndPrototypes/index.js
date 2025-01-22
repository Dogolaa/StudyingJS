const falar = {
  falar() {
    console.log(`${this.nome} esta falando`);
  },
};

const comer = {
  comer() {
    console.log(`${this.nome} esta comendo`);
  },
};

const beber = {
  beber() {
    console.log(`${this.nome} esta bebendo`);
  },
};

const pessoaPrototype = { ...falar, ...beber, ...comer };
//const pessoaPrototype = Object.assign({}, comer, falar, beber);

function criaPessoa(nome, sobrenome) {
  return Object.create(pessoaPrototype, {
    nome: { value: nome },
    sobrenome: { value: sobrenome },
  });
}

const p1 = criaPessoa('Lucas', 'Dogo');
console.log(p1);
p1.beber();
