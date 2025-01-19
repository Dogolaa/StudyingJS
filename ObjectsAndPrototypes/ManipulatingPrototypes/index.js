// new Object -> Object.prototype
const objA = {
  chaveA: 'A',
  //__proto__: Object.prototype
};

const objB = {
  chaveB: 'B',
  //__proto__: objA
};

const objC = new Object();
objC.chaveC = 'C';

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);
console.log(objC.chaveA);

function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.desconto = function (percentual) {
  this.preco = this.preco - this.preco * (percentual / 100);
};

Produto.prototype.aumento = function (percentual) {
  this.preco = this.preco + this.preco * (percentual / 100);
};

const p1 = new Produto('Camiseta', 50);
console.log(p1);
p1.desconto(100);
console.log(p1);

const p2 = {
  nome: 'Caneca',
  preco: 25,
};

Object.setPrototypeOf(p2, Produto.prototype);

console.log(p2);
p2.desconto(100);
console.log(p2);

const p3 = Object.create(Produto.prototype, {
  preco: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 42,
  },
  tamanho: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 26,
  },
});
console.log(p3);
p3.aumento(100);
console.log(p3);
