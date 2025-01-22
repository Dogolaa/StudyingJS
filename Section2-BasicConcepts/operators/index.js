/**
 * Aritmeticos
 *  + Adição / Concatenação
 *  - Subtração
 *  / Divisão
 *  * Multiplicação
 *  ** Potenciação
 *  % Resto da divisão
 */

const num1 = 10;
const num2 = 5;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 / num2);
console.log(num1 * num2);
console.log(num1 ** num2);
console.log(num1 % num2);

/**
 * Incremento ++
 * Decremento --
 * 
 * Operadores de atribuição
 * Serve para qualquer operador
 * += , -= , *= , ...
 * 
 */
const passo = 2;
let contador = 1;

contador++;
++contador;
contador--;

console.log(contador);

contador = contador + passo;
contador += passo; // mesma coisa do de cima, mas clean

console.log(contador);

contador = contador - passo;
contador -= passo; // mesma coisa do de cima, mas clean

console.log(contador);
