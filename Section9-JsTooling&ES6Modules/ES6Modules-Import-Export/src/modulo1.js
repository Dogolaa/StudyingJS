const nome = 'Lucas';
const sobrenome = 'Dogo';
export const idade = 23;

function soma(x, y) {
  return x + y;
}

export { nome, sobrenome as sobrenome2, soma };

export class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
}
