const alun  = ['Luiz', 'Maria', 1, true, null];//funciona normalmente porem nao e uma boa pratica de programacao 
let alunos = ['Luiz', 'Maria', 'Joao'];
console.log(alunos);
console.log(alunos[0]);
console.log(alunos[1]);
console.log(alunos[2]);
alunos[0] = 'Eduardo';//modifica o que esta na posicao 0
alunos[3] = 'Luiza';//pode adicionar no final da lista
//precisa saber qual o tamanho para adicionar dessa forma
let tamanho = alunos.length;
alunos[tamanho] = 'adiciona no final';
console.log(alunos);
alunos[alunos.length] = "abx";
console.log(alunos);
//possui a funcao que adiciona o elemento no finak
alunos.push('ultimo elemento');
console.log(alunos);
//funcao para adicionar no comeco
alunos.unshift('Abacaxi com limao');
console.log(alunos);
//removendo elementos de um array 
alunos.pop();
console.log(alunos);
//removo o elemento do final do array //voce pode tambem salvar aquele elemento que foi removido
const removido = alunos.pop();
console.log(removido);
console.log(alunos);
const removido2 = alunos.shift();//pula um para frente mexendo em todos os indices o que acaba retirando o primeiro elemento da lista 
console.log(removido2);
console.log(alunos);
//deletar o indice nao altera os locais dos indices ele so retira o valor daquela posicao e deixa vazio
delete alunos[1];
console.log(alunos);
console.log(alunos[1]);
//no javascript voce consegue acessar valores que nao existem ele mostra como undefined 
console.log(alunos[50]);
alunos[1] = "Maria";
console.log(alunos);
console.log(alunos.slice(0, 3));//o ultimo elemento nao e incluido ex: 0 1 2 o elemneto do indice 3 nao e incluido 
console.log(alunos.slice(0, -2));
console.log(typeof alunos);//objeto
console.log(alunos instanceof Array);//pergunta se e um array
alunos = 10;
console.log(alunos instanceof Array);

/*Alguns tipos de valores são imutáveis, como:
    number;
    string; 
    boolean;
    undefined; 
    null;
    symbol; 
    bigint;
 os primitivos todos são imutáveis.
 Outros tipos são mutáveis, como arrays e objetos (objetos em geral são mutáveis, com exceção de null).
 pode-se usar const com objetos mutáveis e ainda assim alterar seus valores internos. mas nao pode atribuir um novo valor para aquela variavel
 exemplo mudar um array para uma string unica
 Isso pode
    const array = [1, 2, 3, 4, 5];
    array.pop();
    array[0] = 1024;
    console.log(array); // [ 1024, 2, 3, 4 ]
Isso NÃO pode
    const array = [1, 2, 3, 4, 5];
    array = 'Legal'; // Assignment to constant variable.*/