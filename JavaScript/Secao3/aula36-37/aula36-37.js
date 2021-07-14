/*
Operadores de comparacao
> maior que
>= maior que ou igual a 
< menor que
<= menor que ou igual a
== igualdade (checa valor) *********
=== igualdade estrita (checa valor e tipo)
!= diferente (checa valor) *********
!== diferente estrito (checa valor e tipo)
*/
const espressao = 10 >= 5;
const num1 = 10;
const num2 = '10';
const comp = num1 == num2; //converte os tipos, isso pode gerar efeitos no codigo por isso nao e bom utilizar
const comp2 = num1 === num2; //compara o tipo e o valor
console.log(espressao);// retorna true or false 
console.log(comp, comp2);
