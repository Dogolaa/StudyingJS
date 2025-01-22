// Isso e o escopo lexico a funcao reconhece seus vizinhos

const nome = 'Lucas';

function falaNome() {
  console.log(nome);
}

falaNome();

function usaFalaNome() {
  falaNome();
}
usaFalaNome();
