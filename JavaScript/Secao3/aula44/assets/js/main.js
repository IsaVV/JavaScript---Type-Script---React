const form = document.querySelector('#formulario');

form.addEventListener('submit', function (elemento){
    elemento.preventDefault();
    console.log('evento previnido');
    setResultado('');
});

function criaP () {
    const p = document.createElement('p');//cria um paragrafo
    return p;
}
function setResultado(msg){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = ``;
    const p = criaP();
    resultado.appendChild();//coloca um filho dentro da div de resultado
}



