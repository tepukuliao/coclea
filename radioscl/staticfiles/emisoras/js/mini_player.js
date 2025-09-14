document.addEventListener("DOMContentLoaded", function() {
    const btn = document.getElementById("abrir-mini");

    if (btn) {
        btn.addEventListener("click", function() {
            const ancho = 275;
            const alto = 350;
            
            const izquierda = (window.screen.width - ancho) / 2;
            const arriba = (window.screen.height - alto) / 2;

            window.open(
                "/mini/",
                "MiniReproductor",
                `width=${ancho},height=${alto},top=${arriba},left=${izquierda},` +
                "toolbar=no,location=no,directories=no,status=no,menubar=no," +
                "scrollbars=no,resizable=no"
             );
        });
    }
});