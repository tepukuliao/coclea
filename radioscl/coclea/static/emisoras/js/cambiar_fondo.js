const fondos = [
    {
        url: "/static/img/fondo.gif",
        tipo: "mosaico"
    },
    {
        url: "/static/img/Fondo2.gif",
        tipo: "mosaico"
    },
    {
        url: "/static/img/tky.gif",
        tipo: "completo"
    },
    {
        url: "/static/img/mtains.gif",
        tipo: "completo"
    },
    {
        url: "/static/img/sunset.gif",
        tipo: "completo"
    },
    {
        url: "/static/img/natureGrn.gif",
        tipo: "completo"
    }
];

let fondoActual = 0;

function aplicarFondo(index) {
    const fondo = fondos[index];
    document.body.style.background = `url('${fondo.url}')`;

    if (fondo.tipo === "mosaico") {
        document.body.style.backgroundRepeat = "repeat";   
        document.body.style.backgroundSize = "200px 200px";
        document.body.style.backgroundColor = "#000"; 
    }else{
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundAttachment = "fixed";
    }
}

document.addEventListener("DOMContentLoaded", function(){
    const boton = document.getElementById("cambiar-fondo");

    const fondoGuardado = localStorage.getItem("fondoActual");
    if (fondoGuardado !== null) {
        fondoActual = parseInt(fondoGuardado);
        aplicarFondo(fondoActual)
    }

    if(boton) {
        boton.addEventListener("click", () => {
            fondoActual = (fondoActual + 1) % fondos.length;
            aplicarFondo(fondoActual);
            
            localStorage.setItem("fondoActual", fondoActual);
        })
    }
})