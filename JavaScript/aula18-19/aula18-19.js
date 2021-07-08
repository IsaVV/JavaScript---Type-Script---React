//primeira diferenca entre var e let 
var nome = 'Luiz';
console.log(nome);
var nome = 'Otavio';//tentiva de redeclarar uma variavel
                    //com var ela pode ser redeclarada, isso e um dos problemas do var
                    //isso e considerado uma ma pratica de programacao
                    //ECMAScript - padronizacao criada pela empresa ecma international

//sem utilizar nenhuma palavra padrao como const, let ou var cria uma variavel global
nomes = 'luizes';
console.log(nomes);

let nome2 = 'fernando';
console.log(nome2);
//let nome2 = 'rafa'; //nao permite que a variavel seja declarada mais de uma vez evitando erros no codigo!2
