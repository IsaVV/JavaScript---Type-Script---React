let umaString = "Um \"texto\"";//colocar barra invertida para poder mostrar
let duasString = "Um \\texto";
console.log(umaString);
console.log(duasString);
//strings sao indexadas - sao interaveis - cada caracter possui um indexe comecando de 0, 1, 2, 3
console.log(umaString[0]);
console.log(umaString[1]);
console.log(umaString.charAt(4));
console.log(umaString.concat(' em um lindo dia'));
console.log(umaString + ` em um lindo dia`);
console.log(`${umaString} em um lindo dia`);//preferenciavel
console.log(umaString.indexOf('texto'));
console.log(umaString.indexOf('U', 3));//comeca pelo indice 3 e o U nao existe mais apos o indice 0 ele nao encontra  e retorna -1
console.log(umaString.lastIndexOf('texto'));//comeca de tras pra frente
console.log(umaString.match(/[a-z]/g));//expressao regular ver depois oq sao elas //encontra um array por causa da flag g 
console.log(umaString.search(/[a-z]/g));//retorna o indice do que foi pedido para ser encontrado
console.log(umaString.search(/x/)); // procurando o x retorna o index
console.log(umaString.replace('Um', 'Outra')); //substitui a palavra um para outra
console.log(umaString.replace(/Um/, 'Outra'));//tambem funciona com expressoes regulares 
console.log(umaString.replace(/t/, '#'));//modifica so um t
console.log(umaString.replace(/t/g, '#'));//com a flag g ele troca todos os t's existentes
console.log(umaString.length);//tamanho da string comeca contar por 1 a partir do indice 0
console.log(umaString.slice(4, 8));//parte o texto e lhe informa somente as palavras que estao entre a intercessao
console.log(umaString.length -3);//diminui o tamanho em -3
console.log(umaString.slice(-4));//de tras para frente
console.log(umaString.slice(4));//comeca a imprimir a partir do indice 4
console.log(umaString.slice(-4, -1));
console.log(umaString.substring(umaString.length -4, umaString.length -1));// faz a mesma coisa que o slice de forma mais horrible
console.log(umaString.split(' '));//retira os espacos  transforma num array
console.log(umaString.split('t'));//retira os t e o resto vira array
console.log(umaString.toLocaleUpperCase());//string toda maiscula
console.log(umaString.toLocaleLowerCase());//toda em minusculo
//tudo oq pode fazer com uma string no site do w3
