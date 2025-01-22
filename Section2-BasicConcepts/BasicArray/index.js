const alunos = ['Luiz', 'Maria', 'Joao'];

alunos.unshift('Lucas'); // adiciona no comeca
alunos.push('Marcio'); // adiciona no fim

console.log(alunos);

alunos.pop(); //tira o ultimo do array
console.log(alunos);
const removido = alunos.pop(); //tira o ultimo do array e salva em uma variavel
console.log(removido);

alunos.shift(); //tira o primeiro do array
console.log(alunos);

alunos.push('Marcio'); // adiciona no fim
alunos.push('Mario'); // adiciona no fim
console.log(alunos.slice(0, 3)); // Separa em intervalo
