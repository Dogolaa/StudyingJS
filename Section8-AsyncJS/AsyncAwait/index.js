function aleatorio(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== 'string') reject('Cai no erro');

    setTimeout(() => {
      resolve(msg);
    }, tempo);
  });
}

// esperaAi('Frase 1', aleatorio(1, 3))
//   .then((resposta) => {
//     console.log(resposta);
//     return esperaAi('Frase 2', aleatorio(1, 3));
//   })
//   .then((resposta) => {
//     console.log(resposta);
//     return esperaAi(1, aleatorio(1, 3));
//   })
//   .then((resposta) => {
//     console.log(resposta);
//   })
//   .catch((respostaComErro) => {
//     console.log(`${respostaComErro} não é uma String`);
//   });

async function executa() {
  try {
    const fase1 = await esperaAi('Frase 1', aleatorio(1, 3));
    console.log(fase1);
    const fase2 = await esperaAi('Frase 2', aleatorio(1, 3));
    console.log(fase2);
    const fase3 = await esperaAi('Frase 3', aleatorio(1, 3));
    console.log(fase3);
    const fase4 = await esperaAi(1000, aleatorio(1, 3));
    console.log(fase4);
  } catch (e) {
    console.log(e);
  }
}

executa();
