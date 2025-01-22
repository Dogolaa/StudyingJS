const nome = 'Lucas'; // String
const numero = 10; // Number
const numerof = 1.52; // Number
let nomeAluno; // undefined -> não aponta para nenhum lugar
const sobrenomeAluno = null; // null -> não aponta para nenhum lugar
const aprovado = false; //boolean

console.log(typeof nome , nome); // mostra o tipo do dado primitivo

// DADO POR REFERENCIA

const a = [1,2];
const b = a;



console.log(typeof b , b, typeof a , a); 

b.push(3);

console.log(typeof b , b, typeof a , a);