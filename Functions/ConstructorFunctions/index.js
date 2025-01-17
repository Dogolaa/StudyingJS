// Funcao construtora retorna objetos assim como a fabrica, porem na construtora
// precisamos iniciar com letra maiscula
// factory -> criaPessoa()
// construtora -> Pessoa (new)

function Pessoa(nome, sobrenome) {
  //metodos privados
  const id = 123456;
  const metodoInterno = function () {}; // sao privados, nao estao disponiveis fora do corpo

  //metodos publicos
  this.nome = nome;
  this.sobrenome = sobrenome;

  this.metodo = function () {
    console.log(this.nome + ' Sou um metodo');
  };
}

//a palavra new cria um objeto vazio e faz a palavra this apontar para esse objeto vazio
const p1 = new Pessoa('Lucas', 'Dogo');
const p2 = new Pessoa('Luiz', 'Otavio');

console.log(p1.nome);
p2.metodo();
