// Declaracao de funcao (fnction hoisting) - eleva a declaracao da funcao para o topo do codigo

falaOi(); // funciona mesmo sendo chamada antes de criar a funcao devido ao hoisting

function falaOi() {
  console.log('Oi');
}

// As funcoes sao Firts-class objects (Objetos de primeira classe),
// ou seja, a funcao pode ser tratada como dado

//Function expression
const souUmDado = function () {
  console.log('Sou um dado');
};

souUmDado();

function executaFuncao(funcao) {
  console.log('Vou executar sua funcao abaixo:');
  funcao();
}

executaFuncao(souUmDado);

// Arrow function = é uma function expression bem mais curta, vai divergir das outras com o uso da palavra this (topico posterior)

const funcaoArrow = () => {
  console.log('Sou uma arrow function');
};

funcaoArrow();

//exemplo que usamos a funcao como um dado

setInterval(function () {
  console.log('Funcao sendo usada de dado');
}, 1000);

//Dentro de um objeto

const obj = {
  //Pode ser declarada desses dois jeitos
  falar: function () {
    console.log('Estou falando...');
  },
  dizer() {
    console.log('Estou dizendo...');
  },
};

obj.falar();
obj.dizer();
