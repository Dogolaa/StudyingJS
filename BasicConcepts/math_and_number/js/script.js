const numero = Number(prompt("Digite um numero:"));

const numeroTitulo = document.getElementById("numero-titulo");
const texto = document.getElementById("texto");

numeroTitulo.innerHTML = numero;
texto.innerHTML = `<p> Raiz quadrada do seu numero eh ${Math.sqrt(numero)} </p>
<p> ${numero} eh inteiro: ${Number.isInteger(numero)}</p>
<p> eh NaN: ${Number.isNaN(numero)} </p>
<p> Arredondado para baixo: ${Math.floor(numero)} </p>
<p> Arredondado para cima: ${Math.ceil(numero)} </p>
<p> Com duas casas decimais: ${numero.toFixed(2)} </p>
`;
