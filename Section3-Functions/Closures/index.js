// Clousures e a habilidade da funcao conseguir acessar seu escopo lexico
function retornaFuncao() {
  const nome = 'Lucas';
  return function () {
    return nome;
  };
}

const funcao = retornaFuncao();
console.log(funcao);
