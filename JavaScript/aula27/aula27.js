// IEEE 754-2008
let num1 = 0.7;
let num2 = 0.1;
let num3 = 0.7;
let num4 = 0.1;
num1 += num2;//0.8
num1 += num2;//0.9
num1 += num2;//1.0
console.log(num1);//0.999 

//resolvendo por javascript
console.log(Number.isInteger(num1));//false pois nao passou para float ou integer
num1 = parseFloat(num1.toFixed(2));//igual ao de baixo
//num1 = Number(num1.toFixed(2));//mesma coisa
console.log(Number.isInteger(num1));
console.log(num1);

//resolvendo matematicamente
num3 = ((num3*100)+(num4*100))/100//0.8
num3 = ((num3*100)+(num4*100))/100//0.9
num3 = ((num3*100)+(num4*100))/100//1.0
console.log(num3);

console.log(num1+num2);//soma
console.log(num1.toString() + num2);//concatena
console.log(typeof num1);//o tipo continua number porem ele temporariamente vira string
console.log(num1.toString(2));//versao binaria do numero
console.log(num1.toFixed(2));//arrendonda e deixa 2 casas decimais
console.log(Number.isInteger(num1));//retorna verdadeiro ou falso se o numero e inteiro ou nao
let temp = num1*'ola';//NaN - not a number
console.log(Number.isNaN(temp));//verdadeiro nao funciona 
let temp2 = num1*'5';//ma pratica de programacao
console.log(temp2);

num1 = num1.toString();//nesse caso ele altera o valor da variavel para string
console.log(typeof num1);