// Map altera valores do array, retorna um array exatamente do mesmo tamanho do array orginal
// Semelhante ao filter

// Dobre os numeros
const numeros = [67, 56, 3, 24, 68, 8, 12, 43, 78, 23, 74, 1, 2, 4, 7];

const numerosEmDobro = numeros.map(
  (valor) => valor * 2
  //return `Luiz -> ${valor}`; -> descomente para entender se tiver duvida
);

console.log(numerosEmDobro);

const pessoas = [
  { nome: 'Lucas', idade: 23 },
  { nome: 'Luizmael', idade: 34 },
  { nome: 'Luc', idade: 83 },
  { nome: 'Lua', idade: 26 },
  { nome: 'Lucs', idade: 93 },
  { nome: 'Saca', idade: 32 },
];

//Retorne apenas uma string com o nome da pessoa

const retornaNome = pessoas.map((valor) => valor.nome);
console.log(retornaNome);

// Remova apenas a chave 'nome' do objeto

const removeNome = pessoas.map((obj) => ({
  idade: obj.idade,
}));
console.log(removeNome);

// Adiciona uma chave id em cada objeto
// Para nao alterar o objeto orginal usar o spread
const addId = pessoas.map((obj, indice) => {
  const newObj = { ...obj };
  newObj.id = indice;
  return newObj;
});
console.log(addId);
