//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date
const data = new Date();
console.log(data.toString());
console.log('Dia', data.getDate());
console.log('Mes', data.getMonth()); // Mes comeca do zero
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia da semana', data.getDay()); // 0 - Domingo, 6 - Sabado
console.log(Date.now());

function zeroAEsquerda(num) {
  return num >= 10 ? num : `0${num}`;
}

function formataData(date) {
  const dia = zeroAEsquerda(date.getDate());
  const month = zeroAEsquerda(date.getMonth() + 1);

  return `${dia}/${month}`;
}

const date = new Date();
const dataBrasil = formataData(date);
console.log(dataBrasil);
