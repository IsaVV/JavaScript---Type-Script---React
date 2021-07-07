const nome = `Luiz Otavio`;
const sobrenome = `Miranda`;
const idade = 30;
const peso = 84;
const alturaEmM = 1.80;
let imc; //peso/(altura*altura)
let anoNascimento; //idade - o ano atual

imc = peso/(alturaEmM*alturaEmM);
anoNascimento = 2021 - idade;

console.log(nome + " " + sobrenome + " tem " + idade + " anos, pesa " + peso + " kg");
console.log(`tem ${alturaEmM} de altura e seu imc e de ${imc}`);
console.log(nome, 'nasceu em', anoNascimento, '.');