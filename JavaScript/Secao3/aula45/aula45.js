// condicao ? valor para verdadeiro : valor para falso
const pontuacaoUsuario = 999;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal'
console.log(nivelUsuario);

// if (pontuacaoUsuario >= 1000) {
//     console.log('Usuário VIP');
// } else {
//     console.log('Usuário normal');
// }

const corUsuario = 'azul';
const corPadrao = corUsuario || 'Preta';//caso for falso mostra ao usuario a cor predefinida
console.log(corPadrao);