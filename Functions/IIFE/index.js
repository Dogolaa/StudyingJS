//IIFE -> Immediately invoked function expression

//toca o escopo global
function qualquerCoisa() {
  console.log(11112244444);
}

qualquerCoisa();

//IIFE
const nome = 'Qualquer coisa';

// Previne do escopo global
(function () {
  const nome = 'Lucas';
  console.log(111122445456);
  console.log(nome);

  //posso criar funcoes aqui dentro, tem o escopo proprio
})();
