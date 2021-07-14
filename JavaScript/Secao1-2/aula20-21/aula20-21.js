//tipos de dados primitivos
let nome = 'string';
let num = 12; // number
let variavelSemValor; // undefined -> nao aponta pra local nenhum na memoria //variavel nao inicializada
let variavelNula = null; // Nulo -> aponta pra local nenhum na memoria //variavel inicializada com nada dentro
let boolean1 = false; //valor logico
let boolean2 = true;
console.log(typeof boolean1);//boolean
console.log(typeof variavelNula);//objeto -- nao se enquadra como objeto apesar de aparecer isso 
console.log(typeof variavelSemValor);//undefined
console.log(typeof num);//number
console.log(typeof nome);//string

const a = [1, 2];
const b = a; //a  e b apontam para o mesmo local da memoria por isso sao iguais 

console.log(a, b);
b.push(3);
console.log(a,b);

let a1 = 2;
let b1 = a1; //aqui e realmente uma copia
console.log(a1, b1);
a1 = 3;
console.log(a1, b1);

//dados primitivos javascript string, number, undefined, null, boolean, symbol(sera visto nas aulas a frente);

/*operadores aritmeticos
     + adicao / concatenacao //depende do tipo de dado, com numeros ele soma com string ele concatena mesmo se tiver um numero envolvido ele ira concatenar como string
     - subtracao
     / divisao
     * multiplicacao
     ** potenciacao
     % resto da divisao
*/
let num1 = 2;
let num2 = 10;
let numS = '10'
let num3 = 10
console.log(num1 + num2); //soma
console.log(num1 + " " + numS); //concatena
console.log(num2 - num1); //subtracao
console.log(num1 ** num2);//potenciacao
console.log(num1 % 2)//resto da divisao
console.log((num1 + num2) * num3);//ordem de relevancia
console.log(num1 + num2 * num3);//ordem de relevancia

//incremento ou decremento
let contador = 1;
let contadorD = 10;
contador++;
contador++;
contador++;
contador++;
contadorD--;
contadorD--;
contadorD--;
contadorD--;
console.log(contador++);//primeiro ele exibe a informacao do contador depois soma por isso nao aparece como incrementado
console.log(++contador);//adiciona primeiro +1 e depois exibe na tela a informacao
console.log(contadorD--);//decremento apos
console.log(--contadorD);//decremento antes
 
let num6 = 10;
let num7 = 'luiz';
let num8 = '5'
let armazena;
console.log(num6*num7);//NaN - not a number 
console.log(num6*num8);//resolve para o usuario mesmo sendo uma string por ser um numero mesmo sendo ""
armazena = num6*num8;
console.log(typeof armazena);//e do tipo numerico
//caso ocorra a soma ele so vai fazer a concatenacao de strings
console.log(num6 + num8);
//caso queira que a soma seja feita pode declarar a variavel com parseInt
let num9 = parseInt('5');// converte o numero pra um inteiro tambem existe a funcao parseFloat passou de string para number
console.log(num6 + num9);
let num10 = Number('10.2');//converte para um numero
console.log(num10+num8);//concatena
console.log(num10+num9);//soma
//ordem de relevancia na matematica () --- ** --- * --- / --- % --- + --- -
