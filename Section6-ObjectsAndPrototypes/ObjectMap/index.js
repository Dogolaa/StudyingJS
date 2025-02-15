const pessoas = [
  { id: 3, nome: 'Lucas' },
  { id: 2, nome: 'Luiz' },
  { id: 1, nome: 'Lua' },
];

// const novasPessoas = {};

// for (const pessoa of pessoas) {
//   const { id } = pessoa;
//   novasPessoas[id] = { ...pessoa };
// }

const novasPessoas = new Map();

for (const pessoa of pessoas) {
  const { id } = pessoa;
  novasPessoas.set(id, { ...pessoa });
}

console.log(novasPessoas);
console.log(novasPessoas.get(2));

console.log('##########');

for (const [identifier, { id, nome }] of novasPessoas) {
  console.log(identifier, id, nome);
}
