function main() {
  const form = document.querySelector('.form');

  function recebeEventoForm(evento) {
    evento.preventDefault();

    const peso = form.querySelector('.peso');
    const altura = form.querySelector('.altura');
    let imc = peso.value / (altura.value * altura.value);
    imc = imc.toFixed(2);
    const resultado = document.querySelector('.resultado');
    let resposta;

    if (altura.value > 0 && peso.value > 0) {
      if (imc <= 18.5) {
        resposta = 'Abaixo do peso';
      } else if (imc >= 18.5 && imc <= 24.9) {
        resposta = 'Peso normal';
      } else if (imc >= 25 && imc <= 29.9) {
        resposta = 'Sobrepeso';
      } else if (imc >= 30 && imc <= 34.9) {
        resposta = 'Obesidade grau 1';
      } else if (imc >= 35 && imc <= 39.9) {
        resposta = 'Obesidade grau 2';
      } else if (imc >= 40) {
        resposta = 'Obesidade grau 3';
      } else {
        resposta = 'Valor invalido';
      }
      resultado.innerHTML = ` <p> Seu IMC é ${imc}, ${resposta} </p>`;
    } else {
      resultado.innerHTML = ` <p> Valor inserido invalido </p>`;
    }
  }
  form.addEventListener('submit', recebeEventoForm);
}

main();
