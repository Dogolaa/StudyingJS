const _velocidade = Symbol('velocidade');
class Carro {
  constructor(nome, velocidade) {
    this.nome = nome;
    this[_velocidade] = 0;
  }

  get velocidade() {
    return this[_velocidade];
  }

  set velocidade(valor) {
    if (typeof valor !== 'number') return;
    if (valor >= 100 || valor < 0) return;
    this[_velocidade] = valor;
  }

  acelerar() {
    if (this[_velocidade] >= 100) return;
    this[_velocidade]++;
  }

  freiar() {
    if (this[_velocidade] <= 0) return;
    this[_velocidade]--;
  }
}

const c1 = new Carro('Fusca');

for (let i = 0; i <= 200; i++) {
  c1.acelerar();
}

console.log(c1.velocidade); // usou o getter
c1.velocidade = 55; //usou o getter
console.log(c1);
