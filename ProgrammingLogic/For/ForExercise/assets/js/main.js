const container = document.querySelector('.container');

const elementos = [
  { tag: 'p', texto: 'Frase 1' },
  { tag: 'div', texto: 'Frase 2' },
  { tag: 'footer', texto: 'Frase 3' },
  { tag: 'section', texto: 'Frase 4' },
];

function criaTag(tag, textoNode) {
  const tagCriada = document.createElement(tag);
  tagCriada.appendChild(textoNode);
  container.appendChild(tagCriada);
}

for (let i = 0; i < elementos.length; i++) {
  const tag = elementos[i].tag;
  const texto = elementos[i].texto;
  let textoNode = document.createTextNode(texto);
  criaTag(tag, textoNode);
}
