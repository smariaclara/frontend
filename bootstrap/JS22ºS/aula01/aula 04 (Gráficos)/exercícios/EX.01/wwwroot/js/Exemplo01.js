//Dados para o gráfico
var data = {
    /*rótulos do gráfico */
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril'],
    /*propriedades do gráfico */
    datasets: [{
        label: 'Vendas mensais',
        backgroundColor: 'rgba(241, 128, 82)',
        borderWidth: 1,
        data: [13, 15, 30, 5]
    },{
        label: 'Vendas mensais',
        backgroundColor: 'rgba(169, 90, 82)',
        borderWidth: 1,
        data: [50, 21, 12, 8]
    }]
};

//Configurações do gráfico
var options = {
    scales: {
        y: {
            beginAtZero: true
        }
    }
};

//Criar o gráfico de barras
var ctx = document.querySelector('#grafico')
var barChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
});

