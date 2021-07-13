let num1 = 9.523786;
//arredondar
let arredodaBaixo = Math.floor(num1);//arredonda para baixo
console.log(arredodaBaixo)
let arredodaCima = Math.ceil(num1);//arredonda para cima
console.log(arredodaCima);
let arredoda = Math.round(num1);//arredonda para o mais proximo de um inteiro
console.log(arredoda);
//pegar o maior numero de uma sequencia de numeros
console.log(Math.max(1,2,3453,656,32,2,5,7,845,7,324,8796));
//pegar o menor numero de uma sequencia de numeros
console.log(Math.min(1,2,3453,-10,656,-235,32,-34,2,5,7,845,7,324,8796));
console.log(Math.random()); //gera um numero aleatorio com varias casas decimais
let aleatorio = Math.round(Math.random() * (10 - 5) + 5);//numero aleatorio entre 10 e 5
console.log(aleatorio);
console.log(Math.PI);
console.log(Math.pow(2, 10));//dois elevado a 10
console.log(2**10);//dois elevado a 10 
console.log((2**10) * Math.PI);
