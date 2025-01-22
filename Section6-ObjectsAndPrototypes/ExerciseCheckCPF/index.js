let cpf = '705.484.450-52';
let cpfLimpo = cpf.replace(/\D+/g, '');
let cpfArray = Array.from(cpfLimpo);
let cpfNum = cpfArray.map((valor) => {
  return (valor = Number(valor));
});

let primeiroDigito = primeiroDigitoFun(cpfNum);
let segundoDigito = segundoDigitoFun(cpfNum);

function primeiroDigitoFun(cpfNum) {
  let multi = 10;
  let soma = 0;
  for (let i = 0; i < 8; i++) {
    soma = soma + cpfNum[i] * multi;
    multi = multi - 1;
  }

  let primeiroDigito = 11 - (soma % 11);

  if (primeiroDigito > 9) {
    return 0;
  }
  return primeiroDigito;
}

function segundoDigitoFun(cpfNum) {
  let multi = 11;
  let soma = 0;
  for (let i = 0; i < 10; i++) {
    soma = soma + cpfNum[i] * multi;
    multi = multi - 1;
  }

  let segundoDigito = 11 - (soma % 11);

  if (segundoDigito > 9) {
    return 0;
  }
  return segundoDigito;
}

function verificaDigitos(cpfNum, primeiroDigito, segundoDigito) {
  if (cpfNum[9] === primeiroDigito && cpfNum[10] === segundoDigito) {
    console.log('CPF Valido');
    return;
  }

  console.log('CPF Invalido');
}

verificaDigitos(cpfNum, primeiroDigito, segundoDigito);
console.log(primeiroDigito);
console.log(segundoDigito);
