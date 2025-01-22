/* 
FALSY
false
0
"" '' ``
null / undefined
NaN
*/

console.log('Lucas' && 'Dogo');
console.log('Lucas' && NaN && 'Dogo');

function falaOi() {
  return 'Oi';
}

const vaiExecutar = false;
// const vaiExecutar = 'Joao';
console.log(vaiExecutar && falaOi());

console.log(0 || false || null || 'Lucas' || true); //retorna o primeiro verdadeiro

const corUsuario = null;
const corPadrao = corUsuario || 'preto';

console.log(corPadrao);
