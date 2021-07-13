function saudacao(nome){
    console.log(`Bom dia ${nome}!`);
}
function saudacao2(nome){
    return `Bom dia ${nome}!`;
}

let nome = 'Joao'
saudacao(nome);//chama a funcao para ser executada
nome = 'Maria'
saudacao(nome);
const variavel = saudacao(nome);//armazena o retorno porem como nao retorna nada entao ele armazena undefine
console.log(variavel);
const variavel2 = saudacao2(nome);//armazena o retorno que existe
console.log(variavel2);

function soma(x, y){
    const resultado = x+y;
    return resultado;
}
console.log(soma(2, 6));

function soma2(x =  1, y = 2){//nao precisa dizer o tipo da variavel e dizer o valor que ela vai possuir caso ela nao seja dada como parametro pelo programador 
    const resultado = x+y;
    return resultado;
}
console.log(soma2(2));

//javascript pode jogar uma funcao dentro de uma variavel chamada de funcao anonima
//nao dar nome a funcao 
//precisa por ; no final pois esta dentro de uma variavel
const raiz = function (n){
    return n **0.5
};
console.log(raiz(9));
//arrow function e a mesma coisa porem nao utiliza o nome function somente utiliza o sinal de =>
//vinheram para simplificar caso possua so uma linha nela nao precisa por chaves e se so tiver um parametro nao precisa por parenteses e nao precisa do return
const raiz2 = n => n **0.5;
console.log(raiz2(16));
const raiz3 = (n) => {
    return n **0.5
};
//fazem exatamente a mesma coisa
 