// (condicao) ? 'Valor para verdadeiro' : 'Valor para falso'

const pontuacaoUsuario = 999;

//Versao padrao

if (pontuacaoUsuario >= 1000) {
  console.log('Usuário VIP');
} else {
  console.log('Usuário normal');
}

// usando operador ternario

const nivelUsuario =
  pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';
console.log(nivelUsuario);

let corUsuario = null;
let corPadrao = corUsuario || 'Preta';
console.log(corPadrao);
corUsuario = 'Pink';
corPadrao = corUsuario || 'Preta';
console.log(corPadrao);
