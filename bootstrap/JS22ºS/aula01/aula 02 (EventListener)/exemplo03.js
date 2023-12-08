const corSelecionada = document.querySelector("#corSelecionada");
const exibirCor = document.querySelector("#exibirSelecao");

//função para atualizar a cor exibida
function atualizarCor(){
    /*Atribui o valor da seleção na variável */
    const corSelecionadaValue = corSelecionada.value;
    exibirCor.textContent = `Cor Selecionada: ${corSelecionada.value}`

    /*Usar cor no estilo da DIV */
    exibirCor.style.color = corSelecionadaValue;
}

//Adicionando ouvinte do evento change
corSelecionada.addEventListener('change', atualizarCor);

atualizarCor();