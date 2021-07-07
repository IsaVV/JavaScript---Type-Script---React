let nome = 'Joao';//let sempre utilizado para usar variaveis
                  //var e um jeito antigo de criar variaveis
let x;//caso uma variavel nao possua nenhum valor ela sera mostrada como undefined caso tente imprimila
console.log(x);
x = `abacaxi`;
console.log(x);
let y;
//let y; //declarar duas variaveis com mesmo nome da erro de sintaxe
console.log(nome, `nasceu em 1984`);
console.log(`Em 2000`, nome,`conheceu Maria`);
console.log(nome, `casou-se com maria em 2012`);
console.log(`Maria teve 1 filho com`, nome,`Joao em 2015`);
console.log(`O filho de`,  nome,`se chama Eduardo`);
 
//nao pode criar variaveis com palavras reservadas pela linguagem 
//exemplo let let ou let console as palavras let e console sao reservadas pelas variaveis 
//as variaveis sempre precisam ter nomes significativos que fazem sentido com o resto do codigo 
//nao pode comecar o nome de uma variavel com um numero apos a primeira letra voce pode utilizar numeros
// elas tambem nao pode conter espacos ou tracos 
//utilizar camelCase
//Case-sensitive --- isso quer dizer que palavras maiusculas e minisculas possuiem diferencas quando criamos variaveis
//sempre utilize let ao inves de var quando for criar variaveis


//CONSTANTES
//Nao podemos criar constantes com palavras reservadas
//precisam ter nomes significativos para o codigo
//nao pode comecar o nome de uma constante com algum numero
//nao podem ter espacos ou tracos
//utiliza-se de camelCase e case-sensitive 
//nao pode modificar o valor de uma constante ao longo do codigo
//nao utilizar var, utilize const

const nomeConst = `melancia`;
console.log(nomeConst);

const primeiroNum = 5;
const segundoNum = 10;
const terceiroNum = '32';
const resultado = primeiroNum * segundoNum;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3
console.log(resultadoDuplicado, resultado, resultadoTriplicado);
resultadoTriplicado += 5;
console.log(resultadoDuplicado, resultado, resultadoTriplicado);

//javascript linguagem de tipagem dinamica
// string = text | number = numero

//caso precise saber o tipo de uma variavel utilizar o typeof
console.log(typeof(primeiroNum));
console.log(typeof primeiroNum);//melhor forma
console.log(typeof terceiroNum);
console.log(typeof (primeiroNum + segundoNum));
console.log(primeiroNum + terceiroNum);// esta concatenando entao mostra o numero 5 e o numero 32 na tela sem realmente somar
console.log(typeof primeiroNum + terceiroNum);
console.log(typeof (primeiroNum + terceiroNum));
