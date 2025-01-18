//Valor por referencia

// indexado         0        1          2
const nomes = ['Eduardo', 'Maria', ' Joana'];
// Strings, objetos, funcoes, numeros
const nomes2 = new Array('Eduardo', ' Maria', 'Joana');
nomes[2] = 'Joao';
//delete -> remove elemento, mas n altera indices
delete nomes[2];
console.log(nomes);

//reflete no nomes
const novo = nomes;
//nomes permanece intacto se alguma alteracao foir feita no novo2
const novo2 = [...nomes];
console.log(novo);

novo.pop();
console.log(nomes);

novo2.pop();
console.log(nomes);

console.log(nomes.length);

const removido = nomes.pop(); // remove e retorna o valor removido para a variavel
const removido2 = nomes.shift(); // remove e altera os indices

console.log(nomes, removido);

nomes.push('Eduardo'); // adiciona no final do array
nomes.push('Maria');
nomes.push('Joana');
nomes.unshift('Joao'); //adiciona no comeco e afeta os indices

console.log(nomes);
const slice = nomes.slice(1, 3); // slice.(0, -2) para remover os dois ultimos por exemplo
console.log(slice);

const nome = 'Luiz Otavio Miranda';
const nomeSeparado = nome.split(' '); // usa o espaco para separar, mas pode ser qualquer outro elemento array -> string
const nomeArray = nomeSeparado.join(' '); // Une os valores do array e usa o espaco como meio de uniao, mas pode ser qualquer elemento
console.log(nomeSeparado);
console.log(nomeArray);
