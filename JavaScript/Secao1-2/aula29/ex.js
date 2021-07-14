const numero = Number(prompt('Digite um numero: '));//retorna uma string caso queira somar e necessario converter para um numero 
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');
numeroTitulo.innerHTML = numero;
texto.innerHTML = `<p>Raiz Quadrada: ${numero**0.5}.</p>`;
texto.innerHTML += `<p>${numero} e inteiro: ${Number.isInteger(numero)}.</p>`;
texto.innerHTML += `<p>E NaN: ${Number.isNaN(numero)}.</p>`;
texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}.</p>`;
texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)}.</p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}.</p>`;

