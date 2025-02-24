const { cpfs, cpfs2 } = require('./base');

// ^ -> Comeca com
// $ -> Termina com
// [^] -> negacao
// m -> multiline

const cpf = `215.978.456-12`;

const cpfRegExp = /^(\d{3}\.){2}\d{3}\-\d{2}$/gm;

console.log(cpfs2);
console.log(cpfs2.match(cpfRegExp));
