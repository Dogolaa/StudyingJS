class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  falar() {
    console.log(`${this.nome} esta falando`);
  }
}

const p1 = new Pessoa('Lucas', 'Dogo');

console.log(p1);
p1.falar();
