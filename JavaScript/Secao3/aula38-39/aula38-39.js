/*
Operadores Logicos
&& -> AND -> E
|| -> OR  -> OU
!  -> NOT -> NAO

FALSY
false
0
'' "" ``
null / undefined
NaN
*/
console.log('Luiz' && '' && 'Maria'); //retorna o falso que nesse caso e '' 

function falaOi(){
    return 'Oi';
}

let vaiExecutar = false;
console.log(vaiExecutar && falaOi());//curto circuito pois tem um falso
vaiExecutar =  undefined;
console.log(vaiExecutar && falaOi());
vaiExecutar =  'Joaozinho';
console.log(vaiExecutar && falaOi());