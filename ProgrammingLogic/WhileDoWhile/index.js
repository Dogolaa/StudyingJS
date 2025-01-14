let i = 0;
const nome = 'Lucas';

while (i <= 10) {
  console.log(i);
  i++;
}

i = 0;

while (i < nome.length) {
  console.log(nome[i]);
  i++;
}

function random(min, max) {
  const r = Math.random() * (max - min) + min;
  return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = random(min, max);
console.log(rand);

//verifica a condicao e executa o laço
while (rand !== 10) {
  rand = random(min, max);
  console.log(rand);
}

//Do while executa primeiro e depois verifica a condicao

console.log('############');

do {
  rand = random(min, max);
  console.log(rand);
} while (rand !== 10);
