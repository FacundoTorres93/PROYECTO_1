$(document).ready(function(){
    //Cambio de header
    $(window).on("scroll", function () {
        let posicion = $("#pr").offset();
        if ($(window).scrollTop() >= posicion.top) {
            $("header").removeClass("transparente");
        } else {
            $("header").addClass("transparente");
        }
    })
    //Accionamiento del munu lateral
    $("#burguer").click(function() {
        $("#burguer").toggleClass("abierto");
        $(".menu").toggleClass("abierto"); //enceder o apagar clase
    })
    //Smoot Scroll (desplazamineto suave)
    $("a").on("click", function(){
        if(this.hash !== ""){
            let hash= this.hash;
            $("html, body").animate({
                scrollTop: $(hash).offset().top
            }, 800) //movimimento en ms del scroll
        }
    })
})