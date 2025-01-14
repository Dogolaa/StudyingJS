try {
  //executada quando nao ha erros
  //console.log(a)
  console.log('Abri um arquivo');
  console.log('Manipulei o arquivo e gerou erro');
  console.log('Fechei o arquivo');
} catch (e) {
  //executada quando ha erros
  console.log('Tratando o erro');
} finally {
  // executa sempre mas pode ser omitido
  console.log('Eu sempre sou executado');
}

function retornaHora(data) {
  if (data && !(data instanceof Date)) {
    throw new TypeError('Esperando instancia de Date');
  }

  if (!data) {
    data = new Date();
  }

  return data.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  });
}

try {
  const data = new Date('01-01-1970 15:54:12');
  const hora = retornaHora(data);
  //const hora = retornaHora(11);
  console.log(hora);
} catch (err) {
  console.log('Tratar erro');
} finally {
  console.log('Tenha um bom dia');
}
