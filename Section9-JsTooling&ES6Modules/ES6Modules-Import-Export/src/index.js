import { nome as nome2, sobrenome2, idade, soma, Pessoa } from './modulo1';
import * as MeuModulo from './modulo2';
import padrao from './modulo2'; // sem {} importa-se  o Default

const nome = 'joao';

console.log(nome, nome2, sobrenome2, idade);
console.log(soma(5, 5));

const p1 = new Pessoa('Felipe', 'Dogo');
console.log(p1);

const p2 = new MeuModulo.Pessoa('Ingrid', 'Danielli');
console.log(p2);

console.log(padrao(5, 2));
