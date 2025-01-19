/*
Object.values
Object.entries
Object.assign(des, any)
Object.getOwnPropertyDescriptor(o, 'prop')
... (spread)


//Ja vimos

Object.keys (retorna as chaves)
Object.freeze (congela objetos)
Object.defineProperty (Define uma propriedade)
Object.defineProperties (Define varias propriedades)
*/

const produto = { nome: 'caneca', preco: '1.8' };
const outraCoisa = produto; // altera o principal
const outraCoisa2 = { ...produto, material: 'porcelana' }; // nao latera o principal
const outraCoisa3 = Object.assign({}, produto, { material: 'Porcelana' }); // alternativa ao spread
console.log(produto);
outraCoisa.nome = 'Lucas';
console.log(produto);
console.log(outraCoisa2);
console.log(outraCoisa3);
console.log(Object.keys(produto));
Object.freeze(produto);
produto.nome = 'Outra coisa'; // nao funciona por conta do freeze
console.log(produto);

console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
console.log(Object.values(produto));
console.log(Object.entries(produto));
