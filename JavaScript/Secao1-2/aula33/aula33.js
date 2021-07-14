//E possivel modificar os valores que ficam dentro do array
//mesmo ele sendo uma constante porem nao pode modificar o tipo 
//da variavel de array para string por exemplo
// const array = [1,2,3];
// array.push(4);
// array[0] = 'Luiz';
// array = 'Outra';
// console.log(array);
// const nome01 = 'Luiz';
// const sobrenome01 = 'Miranda';
// const idade01 = 25;

// const nome02 = 'Maria';
// const sobrenome02 = 'Oliveira';
// const idade02 = 55;
//juntar essas variaveis em um so por manterem um padrao
//criando um objeto
//as variaveis sao inicializadas sem necessidade de dizer se e var ou let 
// const pessoa1 = {
//     nome: 'Luiz',
//     sobrenome: 'Miranda',
//     idade: 25
// };
// const pessoa2 = {
//     nome: 'Maria',
//     sobrenome: 'Oliveira',
//     idade: 55
// };
// console.log(pessoa1.idade);
// console.log(pessoa1.sobrenome);
// console.log(pessoa2.idade);
// console.log(pessoa2.sobrenome);
//da pra criar uma funcao que cria esse objeto
//separar as variaveis por virgula
// function criaPessoa(nome, sobrenome, idade){
//     return{
//         nome: nome,
//         sobrenome: sobrenome,
//         idade: idade
//     };
// }
//quando as variaveis tem o mesmo nome nao precisa por 
// function criaPessoa(nome, sobrenome, idade){
//     return{nome,sobrenome,idade };
// }
// const pessoa1 = criaPessoa('Luiz', 'Otavio', 25);
// const pessoa2 = criaPessoa('Maria', 'Oliveira', 55);
// console.log(pessoa1.nome, pessoa2.nome);

//atributos e seus valores
//quando uma funcao esta dentro de um objeto ela e chamada de metodo
//no objeto nao necessita declarar fuction somente o corpo 
const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala() {
        console.log('ola mundo!');
        //o this se refere ao objeto em que ele esta 
        console.log(`${this.nome} ${this.sobrenome} esta falando oi...`);
        console.log(`A minha idade atual e ${this.idade}`);
    },
    incrementaIdade(){
        this.idade++;
    }
};
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.incrementaIdade();
pessoa1.incrementaIdade();
pessoa1.fala();
