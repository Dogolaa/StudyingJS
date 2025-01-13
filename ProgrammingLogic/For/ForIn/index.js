const frutas = ['Pera', 'Uva', 'Banana'];
const pessoa = {
  nome: 'Lucas',
  sobrenome: 'Dogo',
  idade: 23,
};

//For classico

for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

//For in -> le os indices ou chaves do array/objetos
for (let i in frutas) {
  console.log(frutas[i]);
}

for (let chave in pessoa) {
  console.log(chave, pessoa[chave]);
}
