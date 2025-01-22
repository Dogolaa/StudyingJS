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
    let diaSemanaTexto;
    switch (diaDaSemana) {
      case 0:
        diaSemanaTexto = 'Domingo';
        return diaSemanaTexto;
      case 1:
        diaSemanaTexto = 'Segunda-feira';
        return diaSemanaTexto;
      case 2:
        diaSemanaTexto = 'Terca-feira';
        return diaSemanaTexto;
      case 3:
        diaSemanaTexto = 'Quarta-feira';
        return diaSemanaTexto;
      case 4:
        diaSemanaTexto = 'Quinta-feira';
        return diaSemanaTexto;
      case 5:
        diaSemanaTexto = 'Sexta-feira';
        return diaSemanaTexto;
      case 6:
        diaSemanaTexto = 'Sabado';
        return diaSemanaTexto;
      default:
        diaSemanaTexto = '';
        return diaSemanaTexto;
    }
  }

  function formataMes(mes) {
    let mesTexto;
    switch (mes) {
      case 0:
        mesTexto = 'Janeiro';
        return mesTexto;
      case 1:
        mesTexto = 'Fevereiro';
        return mesTexto;
      case 2:
        mesTexto = 'Marco';
        return mesTexto;
      case 3:
        mesTexto = 'Abril';
        return mesTexto;
      case 4:
        mesTexto = 'Maio';
        return mesTexto;
      case 5:
        mesTexto = 'Junho';
        return mesTexto;
      case 6:
        mesTexto = 'Julho';
        return mesTexto;
      case 7:
        mesTexto = 'Agosto';
        return mesTexto;
      case 8:
        mesTexto = 'Setembro';
        return mesTexto;
      case 9:
        mesTexto = 'Outubro';
        return mesTexto;
      case 10:
        mesTexto = 'Novembro';
        return mesTexto;
      case 11:
        mesTexto = 'Dezembro';
        return mesTexto;
      default:
        mesTexto = '';
        return mesTexto;
    }
  }

  function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
  }
}

main();
