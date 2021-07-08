alert('Com a nossa mensagem');
//METODO LOG DENTRO DO OBJETO CONSOLE
console.log('alguma coisa');
window.alert('Mensagem');//volta undefined
window.confirm('Deseja realmente apagar?');//alert com cancelar ou ok e retorna um boolean true ou false
window.prompt('Digite o seu nome:');//abre um alert com caixa de texto possui cancelar e ok tambem //caso a pessoa clique em cancelar ele volta um valor nulo //caso o usuario nao escreva nada entao aparece um espaco em branco ""
//3 metodos alert confirm e prompt // sao funcoes mais ou menos
confirm('Deseja realmente apagar?');
prompt('Digite o seu nome:');
let confirma = confirm('Deseja realmente apagar?');
console.log(confirma);