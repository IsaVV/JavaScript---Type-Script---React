// function meuescopo (){
//     //query selector seleciona os elementos
//     //para selecionar uma classe precisa por um ponto 
//     //para selecionar pelo id precisa de # 
//     //ou caso so tenha aquele elemento form por exemplo pode procurar por form que ele vai pegar certinho
//     const form = document.querySelector('.form');
//     //quando o forms for submetido um evento vai acontecer
//     // form.onsubmit = function(evento){
//     //     evento.preventDefault();//nesse evento previne o que aconteceria por padrao
//     // };

//     let contador = 1;
//     function recebeEventoForm(evento){
//         evento.preventDefault();
//         console.log(`Form nao enviado ${contador}`);
//         contador++;
//     }
//     //outra forma de fazer isso
//     //recebe uma funcao
//     form.addEventListener('submit', recebeEvento);
//     //escuta os eventos que estao acontecendo
// }
// meuescopo();

function meuescopo(){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    const pessoas = [];

    function recebeEventoForm (evento){
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        // console.log(nome, sobrenome, peso, altura);
        // console.log(nome.value, sobrenome, peso, altura);
        
        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });
        console.log(pessoas);

        resultado.innerHTML += `nome: ${nome.value}, sobrenome: ${sobrenome.value}, peso: ${peso.value}, altura: ${altura.value}`
    }

    form.addEventListener('submit', recebeEventoForm);
}
meuescopo();