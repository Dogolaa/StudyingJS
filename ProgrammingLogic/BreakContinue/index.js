const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros) {
  if (numero === 2) {
    console.log('Pulei o 2');
    continue; // pula para a proxima iteracao do laço, colocar antes da ação
  }

  console.log(numero);

  if (numero === 7) {
    console.log('7 encontrado saindo');
    break; // sai completamente do laço, termina o laço
  }
}
