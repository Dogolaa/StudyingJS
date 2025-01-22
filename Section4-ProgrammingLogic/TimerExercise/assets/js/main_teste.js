const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

let segundo = 0;
let timer;

function criaHora(segundo) {
  const data = new Date(segundo * 1000);
  const dataPronta = data.toLocaleTimeString('pt-BR', {
    hour12: false,
    timeZone: 'UTC',
  });
  console.log(dataPronta);
  return dataPronta;
}

//Entao o setInterval executa a funcao que esta nele a cada tempo setado depois da virgula
// nesse caso a cada 1 segundo ele roda a funcao anonima dele, que adiciona um segundo e atualiza o html
function criaTimer() {
  timer = setInterval(function () {
    segundo++;
    relogio.innerHTML = criaHora(segundo);
  }, 1000);
}

document.addEventListener('click', function (event) {
  const click = event.target;

  if (click === iniciar) {
    relogio.classList.remove('pausado');
    clearInterval(timer);
    criaTimer();
  }

  if (click === pausar) {
    relogio.classList.add('pausado');
    clearInterval(timer);
  }

  if (click === zerar) {
    segundo = 0;
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
  }
});
