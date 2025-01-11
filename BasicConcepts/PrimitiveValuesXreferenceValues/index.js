/**
 * Primitivos - String, number, boolen, undefined,
 * null (bigint, symbol) - Valroes copiados
 *
 * Referencia (mutavel) - array, object, function - Valores passados por referencia
 */

//Primitivos

let a = 'A';
let b = a;
console.log(a, b);
b = 'Outra coisa';
console.log(a, b);

// Referencia - Nota-se que c e d estao apontando para o mesmo array, diferente dos primitivos, onde cada
//um tem seu valor independente

let c = [1, 2, 3];

// Le-se d referencia o mesmo valor na memoria que c
let d = c;

// para tornar independente podemos usar (spred)
let e = [...c];

console.log(c, d, e);
c.push(5);
console.log(c, d, e);
d.pop();
console.log(c, d, e);

//Nota-se que o e nao sofre as alteracoes junto com o d e c
