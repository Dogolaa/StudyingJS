function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== 'string') {
      reject(false);
      return;
    }

    setTimeout(() => {
      resolve(msg.toUpperCase() + ' - Passei na promise');
    }, tempo);
  });
}

// Promise.all Promise.race Promise.resolve Promise.reject
const promises = [
  //'Primeiro valor',
  esperaAi('Promise 1', 3000),
  esperaAi('Promise 2', 500),
  esperaAi('Promise 3', 1000),
  //esperaAi(1000, 800),
  //'Outro valor',
];

// Promise.all(promises)
//   .then(function (valor) {
//     console.log(valor);
//   })
//   .catch(function (erro) {
//     console.log(erro);
//   });

// Promise.race(promises)
//   .then(function (valor) {
//     console.log(valor);
//   })
//   .catch(function (erro) {
//     console.log(erro);
//   });

function baixaPagina() {
  // const emCache = true;
  const emCache = false;

  if (emCache) {
    return Promise.resolve('Pagina em cache');
  } else {
    return esperaAi('Baixei a pagina', 3000);
  }
}

function baixaPagina2() {
  const emCache = true;
  //const emCache = false;

  if (emCache) {
    return Promise.reject('Pagina em cache');
  } else {
    return esperaAi('Baixei a pagina', 3000);
  }
}

baixaPagina()
  .then((dadosPagina) => {
    console.log(dadosPagina);
  })
  .catch((e) => console.log('ERRO ' + e + 'Promise.resolve'));

baixaPagina2()
  .then((dadosPagina) => {
    console.log(dadosPagina);
  })
  .catch((e) => console.log('ERRO ' + e + 'Promise.reject'));
