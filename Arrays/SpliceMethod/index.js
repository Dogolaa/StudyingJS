//Splice faz o mesmo que pop, push, shift, unshift
const nomes = ['Eduardo', 'Maria', ' Joana', 'Gabriel', 'Julia'];

//nomes.splice(indice, delete, elemento1, elemento2, ...)
const removidos = nomes.splice(-2, 2); //retorna um array
console.log(nomes, removidos);
