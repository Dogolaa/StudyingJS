//For Of é especifico para objetos iteraveis (arrays, strings), aqueles que tem indices, nao serve para OBJETOS

const nome = 'Lucas Dogo';
const nomes = ['Lucas Dogo', 'Felipe Dogo', 'Outro nome'];

//For classico
for (let i = 0; i < nome.length; i++) {
  console.log(nome[i]);
}
console.log('####');
for (let i = 0; i < nomes.length; i++) {
  console.log(nomes[i]);
}
console.log('########');

//For In
for (let i in nome) {
  console.log(i);
  //console.log(nome[i]);
}
console.log('####');
for (let i in nomes) {
  console.log(i);
  //console.log(nomes[i]);
}

console.log('########');

//For Of = pega o valor diferente do in a cima que pega o indice

for (let valor of nome) {
  console.log(valor);
}
console.log('####');
for (let valor of nomes) {
  console.log(valor);
}

console.log('########');

//ForEach

nomes.forEach(function (valor, indice, array) {
  console.log(valor, indice, array);
});
