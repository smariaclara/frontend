const botao = document.querySelector('#aumentar');
const botao2 = document.querySelector('#diminuir');
const botao3 = document.querySelector('#zerar');
const contadorElemento = document.querySelector('#contador');

let contador = 0;

function mais()
{
    contador++
    contadorElemento.textContent = contador;
}
function menos()
{
    contador--
    contadorElemento.textContent = contador;
}
function zerinhoounao()
{
    contador = 0;
    contadorElemento.textContent = contador;
}

botao.addEventListener('click', mais);
botao2.addEventListener('click', menos);
botao3.addEventListener('click', zerinhoounao);
