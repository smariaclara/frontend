const canvas = document.querySelector("#pintarCanvas");
canvas.width = 800;
canvas.height = 600;
const context = canvas.getContext('2d');

//Variável que armazena a cor
const corEscolhida = document.querySelector('#corEscolhida');
const botao = document.querySelector('#limpar');
let pintando = false;

//Define a variável como true indicando que o usuário começou a desenhar
canvas.addEventListener('mousedown', () => {
    pintando = true;
})

//Define a variável como false indicando que o usuário soltou o click
canvas.addEventListener('mouseip', () => {
    pintando = false;
    context.beginPath(); /*começa uma nova trajetória */
})

//A ação é iniciada assim qe o mouse se move, desde que o mousedown continue pressionado
canvas.addEventListener('mousemove', desenhar);

//Seleciona a cor a ser utilizada
corEscolhida.addEventListener('input', atualizarCor);

//Chamamos a função desenhar e passamos o event como parâmetro.
/*O event é um objeto que contém atributos que são adicionados de acordo com o evento escolhido */
function desenhar(event){
    if(!pintando) return;
    /*retornam a posição do elemento na tela */
    const {clientX, clientY} = event;
    /*obtém as coordenadas de canto esquerdo do topo */
    const {left, top} = canvas.getBoundingClientRect();

    //Subtrai as coordenadas do canvas nos dando a relatividade com o canvas
    const x = clientX - left;
    const y = clientY - top;

    context.lineTo(x,y);
    context.stroke();
    context.beginPath();
    context.moveTo(x,y);

}

function atualizarCor(event){
    context.strokeStyle = event.target.value;
}

function limpar(){
    context.clearRect(0,0, canvas.width, canvas.height);
    context.beginPath();
}

botao.addEventListener('click', limpar);