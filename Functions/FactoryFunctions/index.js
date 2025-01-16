// Factory Function ( funcao fabrica)
function criaPessoa(nome, sobrenome, p, a) {
  return {
    nome,
    sobrenome,

    //getter
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },

    //setter

    set nomeCompleto(valor) {
      valor = valor.split(' ');
      this.nome = valor.shift();
      this.sobrenome = valor.join(' ');
    },

    fala: function (assunto) {
      //return `${nome} esta  ${assunto} ${peso}`; // nao funciona pois o peso esta depois
      return `${nome} esta  ${assunto} ${this.peso}`; //this refere-se a aquilo que o chamou, neste caso quem chama e o p1
      // ou seja e o emsmo que p1.nome === this.nome
    },
    peso: p,
    altura: a,
    // imc() {
    //   const indice = this.peso / (this.altura * this.altura);
    //   return indice.toFixed(2);
    // },
    //para que nao seja necessario chama-lo como uma funcao do jeito que esta acima com p1.imc() usamos o get, imc finge ser um atributo,
    //getter
    get imc() {
      const indice = this.peso / (this.altura * this.altura);
      return indice.toFixed(2);
    },
  };
}

const p1 = criaPessoa('Lucas', 'Dogo', 110, 1.86);
console.log(p1.fala('falando sobre Js'));

// console.log(p1.imc()); //evitamos isso
console.log(p1.imc);
console.log(p1.nomeCompleto);
p1.nomeCompleto = 'Lucas Dogo de Souza Pezzuto';
console.log(p1.nome);
console.log(p1.sobrenome);
