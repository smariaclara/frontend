function animarBarraProgresso(){
    //Declarando as variáveis e atribuindo os valores através dos elementos da DOM
    var progresso = 0;
    var barra = $(".progress-bar");
    var barraProgresso = $(".progress");

    var intervalo = setInterval(function(){
        if(progresso > 100){
            clearInterval(intervalo);
            barraProgresso.hide();
            document.body.style.backgroundImage = `url("https://uploads.jovemnerd.com.br/wp-content/uploads/2018/03/sabrina-ross-lynch.png")`
        }else{
            progresso++;
            barra.css("width", progresso + "%");
        }
    },50);
}