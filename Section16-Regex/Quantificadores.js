const { texto, arquivos } = require("./base");

// * (opcionais) 0 ou n {0,}
// + (obrigatorio) 1 ou n {1,}
// ? (opcionais) 0 ou 1 {0,1}
// \ caractere de escape
// {n,m} (n = min, m = max)
// {10,} no minimo 10
// {0, 10} de zero a 10
// {5,10} de 5 a 10
// {10} especifio de 10 vezes

const regExp1 = /Jo+ão/gi;
console.log(texto.match(regExp1));

const regExp2 = /Jo+ão+/gi;
console.log(texto.match(regExp2));

const regExp3 = /Jo+ão+/gi;
console.log(texto.match(regExp3));

console.log(`\n ########################## \n`);

//const regExp4 = /\.(jpg|jpeg)/gi;
const regExp4 = /\.jpe?g/gi;

for (const arquivo of arquivos) {
  const valido = arquivo.match(regExp4);
  if (!valido) continue;
  console.log(arquivo, valido);
}
