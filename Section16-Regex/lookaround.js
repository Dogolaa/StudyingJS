const { lookahead } = require('./base');

//console.log(lookahead);

//console.log(lookahead.match(/.+[^in]active$/gim));

// //Positive lookahead(frase que tem active)
// console.log(lookahead.match(/.+(?=[^in]active)/gim));

// //Positive lookahead(frase que tem inactive)
// console.log(lookahead.match(/.+(?=\s+inactive)/gim));

// //Negative lookahead (frases que nao tem active)
// console.log(lookahead.match(/^(?!.+[^in]active).+$/gim));

// //Negative lookahead (frases que nao tem inactive)
// console.log(lookahead.match(/^(?!.+inactive).+$/gim));

// //Positive lookbehind (Frases que comecam com ONLINE)
// console.log(lookahead.match(/(?<=ONLINE\s+)\S+.*/gim));

// //Negative lookbehind (Frases que nao comecam com ONLINE)
// console.log(lookahead.match(/^.+(?<!ONLINE.+)$/gim));

const cpf = `
012.250.796-10
111.111.111-11
147.285.963-10
`;

console.log(
  cpf.match(/^(?!^(\d)\1{2}\.\1{3}\.\1{3}-1{2}$)\d{3}\.\d{3}\.\d{3}\-\d{2}$/gm)
);
