function meuescopo() {
    const form = document.querySelector('#formulario');
    const resultado = document.querySelector('#resultado');


    form.addEventListener('submit', function recebeEventoForm(evento){
        evento.preventDefault();

        const inputPeso = event.target.querySelector('#peso');
        const inputAltura =  event.target.querySelector('#altura');
        const peso = Number(inputPeso.value);
        const altura = Number(inputAltura.value);
        const imc = peso/(altura*altura);
    
        if (imc >= 40) resultado.innerHTML = `Seu imc e ${imc} (obesidade grau 3)`
        if (imc >= 35 && imc < 39.9) resultado.innerHTML = `Seu imc e ${imc} (obesidade grau 2)`
        if (imc >= 30) resultado.innerHTML = `Seu imc e ${imc} (obesidade grau 1)`
        if (imc >= 25) resultado.innerHTML = `Seu imc e ${imc} (sobrepeso)`
        if (imc >= 18.5) resultado.innerHTML = `Seu imc e ${imc} (peso normal)`
        if (imc < 18.5) resultado.innerHTML = `Seu imc e ${imc} (abaixo do peso)`        

    });
    
}
meuescopo();