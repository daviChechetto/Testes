
    function criaCookie(nome, valor) {
        var now = new Date();
        var time = now.getTime();
        time += 3600 * 24 * 60 * 1000;
        now.setTime(time);
        var expires = "expires=" + now.toUTCString();
        return document.cookie = nome + '=' + valor + ";" + expires + ";";
    }

    function lerCookie(cookieSelected) { 
        var listaCookies = document.cookie.split("; ");
        for (var i = 0; i < listaCookies.length; i++) {

            var cookie = listaCookies[i].split("=");

            if (cookie.includes(cookieSelected)) { 
                return true;
            }
        }
        return false;
    }

    
$(function() {
    var resultado = lerCookie("primeiroAcesso"); // verifica o nome do cookie
    if (!resultado) {

        criaCookie("primeiroAcesso", "true"); // cria o cookie se não existir

        setTimeout(() => {
    
            // Scroll para sinalizar que a tela pode ser rolada
            $('html, body').animate({
                scrollTop: $(window).height() - 60 // Move 60px antes do fim da primeira tela
            }, 'slow').animate({
                scrollTop: 0
            });
            console.log("ss")
        }, 200);

    }
});
