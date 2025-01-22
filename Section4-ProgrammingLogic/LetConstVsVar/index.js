const verdadeira = true;
let nome = 'Lucas';
var nome2 = 'Lucas';

//let nome = 'Dogo';  //nao posso redeclarar let
var nome2 = 'Dogo'; // posso redeclarar

//Let tem escopo de bloco { ... bloco}
//Var so tem escopo de funcao

if (verdadeira) {
  let nome = 'Luiz';
  var nome2 = 'Rogerio';
  if (verdadeira) {
    let nome = 'Outra Coisa';
    var nome2 = 'Ronaldo';
  }
}

console.log(nome, nome2);

//Ela pega a var de fora, mas nao "da" as var de dentro
var sobrenome = 'Dogo';
function falaOi() {
  var saudacao = 'oi';
  console.log(sobrenome);
}
//console.log(saudacao)
falaOi();

//Hoisting se aplica a var e funcoes, ele eleva a declaracao para o topo do escopo
