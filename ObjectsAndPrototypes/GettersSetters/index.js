function Produto(nome, preco, estoque) {
  let estoquePrivado = estoque;

  Object.defineProperties(this, {
    nome: {
      enumerable: true,
      configurable: false,
    },
    preco: {
      enumerable: true,
      configurable: false,
    },
    estoque: {
      enumerable: true,
      configurable: false,
      get: function () {
        return estoquePrivado;
      },
      set: function (valor) {
        if (typeof valor !== 'number') {
          console.log('Bad Value');
          return;
        }
        estoquePrivado = valor;
      },
    },
  });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);
p1.estoque = 'Sou idiota';
console.log(p1.estoque);
p1.estoque = 500;
console.log(p1.estoque);
