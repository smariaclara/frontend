//Atribui a uma variável o elemento selecionado
canvas = document.querySelector('canvas');

//Definir o tamanho do canvas
canvas.width = 800;
canvas.height = 600;

//A variável C se torna um objeto onde pode ser atribuído métodos
c = canvas.getContext('2d');

//Atribuindo propriedades e métodos ao nosso objeto /*posições*/
c.fillStyle = "rgba(189,21,80)";
c.fillRect(0,0,50,50);
c.fillStyle = "rgba(248,202,0,0.5)"
c.fillRect(100,30,50,70)
c.fillStyle = "rgba(138,155,15)"
c.fillRect(200,100,500,100)

//Desenhando uma linha
c.beginPath();
/*Posição início da linha*/
c.moveTo(50,450);
c.lineTo(700,50);
c.strokeStyle = "rgba(73,10,61)";
c.stroke();
c.closePath();

//Desenhando um círculo /*posições*/ /*X, Y, raio, anguloInicial e anguloFinal*/
c.beginPath();
c.arc(400,450,100,0, Math.PI * 2);
c.fillStyle = "rgba(233,127,2)";
c.stroke();
c.fill();
c.closePath();

//Criando um laço para criar vários círculos randômicos
for(var i = 0; i < 10; i++) 
{
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;

    c.beginPath();
    c.arc(x, y, Math.random() * 100, 0, Math.PI * 2);
    c.fillStyle = "rgba(0, 170, 255)";
    c.stroke();
    c.fill();
    c.closePath();
}
