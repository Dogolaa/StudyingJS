const container = document.querySelector('.container');
const div = document.createElement('div');

const elementos = [
  { tag: 'p', texto: 'Frase 1' },
  { tag: 'div', texto: 'Frase 2' },
  { tag: 'footer', texto: 'Frase 3' },
  { tag: 'section', texto: 'Frase 4' },
];

for (let i = 0; i < elementos.length; i++) {
  let { tag, texto } = elementos[i];
  let tagCriada = document.createElement(tag);
  //tagCriada.innerHTML = texto
  //tagCriada.innerText = texto
  let textoNode = document.createTextNode(texto);
  tagCriada.appendChild(textoNode);
  div.appendChild(tagCriada);
}

container.appendChild(div);
