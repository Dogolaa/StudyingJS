//g - global (encontra todas as ocorrencias)
//i - insensitive
// () grupos
// | ou

const texto = require("./base");

const regExp1 = /(Teve | 5) (filhos)/i;
const found = regExp1.exec(texto);

console.log(regExp1.test(texto));
console.log(regExp1.exec(texto));
console.log(found[0]);
