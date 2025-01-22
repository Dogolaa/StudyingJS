function main() {
  const data = new Date();
  const dia = data.getDate();
  const diaDaSemana = data.getDay();
  const mes = data.getMonth();
  const ano = data.getFullYear();
  const hora = data.getHours();
  const minuto = data.getMinutes();

  escreve(
    dia,
    formataDiaDaSemana(diaDaSemana),
    formataMes(mes),
    ano,
    zeroAEsquerda(hora),
    zeroAEsquerda(minuto)
  );

  function escreve(dia, diaDaSemana, mes, ano, hora, minuto) {
    const exibeData = document.querySelector('.container h1');
    exibeData.innerHTML = `${diaDaSemana}, ${dia} de ${mes} de ${ano} ${hora}:${minuto}`;
  }

  function formataDiaDaSemana(diaDaSemana) {
    const diasSemana = [
      'Domingo',
      'Segunda-feira',
      'Terca-feira',
      'Quarta-feira',
      'Quinta-feira',
      'Sexta-feira',
      'Sabado',
    ];
    return diasSemana[diaDaSemana];
  }

  function formataMes(mes) {
    const meses = [
      'Janeiro',
      'Fevereiro',
      'Marco',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro',
    ];

    return meses[mes];
  }

  function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
  }
}

main();
