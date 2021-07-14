/* 
Primitivos (imutaveis): string, number, boolean, undefined, null (bigint, symbol) 
-- valores copiados
Referencia (mutavel) - array, object, function
-- passados por referencia
*/
          //0123
let nome = 'Luiz';//o valor primitivo e string
nome = 'Otavio';//continua sendo string apesar de ter mudado o texto dentro
console.log(nome);
console.log(nome[0]);//primeira letra
nome[0] = 'R';//isso nao e possivel pois string e imutavel
console.log(nome[0]);

let a = 'A';
let b = a;
//tanto a quanto b recebem o mesmo valor
//dados primitivos como copia
//ao longo do codigo b mantem seu valor independente do valor que a tiver
console.log(a, b);
a = 'ota coisa';
console.log(a, b);
//quando o dado for primitivo e voce os iguala eles criam uma copia 
let c = [1, 2, 3];
//copiando um array dentro do outro
b = [...c];
//dois arrays apontando para o mesmo lugar
let d = c;//nao simplesmente copia
//quando voce diz que duas variaveis de referencias sao iguais elas apontam para o mesmo local na memoria
console.log(b, c, d);

c.push(4);//apesar de so mexer em c por eles estarem apontando para o mesmo local na memoria d tambem possui o valor do push em seu array
console.log(b, c, d);

d.pop();//tirei de d afetei em c tambem pois apontam para o mesmo valor na memoria
console.log(b, c, d);

//objetos que apontam para o mesmo lugar na memoria
const a1 = {
    nome: 'Luiz',
    sobrenome: 'Otavio'
};
const b1 = a1;
a1.nome = 'Joao';
console.log(b1);

const c1 = {...a1};

a1.nome = 'abacaxi';

console.log(b1, c1);


