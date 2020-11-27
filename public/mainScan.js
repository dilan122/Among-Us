var canvas = document.getElementById("game");
var ctx = canvas.getContext('2d');

ctx.fillStyle = "rgb(0,192,23)";

var butFill = document.getElementById("butFill");
butFill.addEventListener('click', moverRectangulo);

var imagenFondo = new Image();
imagenFondo.src = "https://i.imgur.com/PPSylFN.png?1";

const LIMITE_CARGA = 646;

var rect = {
    posX: 25,
    posY: 320,
    ancho: 0,
    alto: 50 
}

pintarImagenDeFondo();

var interval = null;

function moverRectangulo(){
    //pintarVideo();
    if(interval === null){
        interval = setInterval(function(){

            if(estaEnElLimite()){
                alert("Tarea completada");
                clearInterval(interval);
                interval = null;
            }

            rect.ancho += 0.27;
            limpiarTablero();
            pintarRectangulo(rect); 
            pintarImagenDeFondo();
        }, 1)
        
    }
    else{
        clearInterval(interval);
        interval = null;
    }

}

function estaEnElLimite(){
    return rect.ancho >= LIMITE_CARGA;
}

function limpiarTablero(){
    ctx.clearRect(0,0, canvas.width, canvas.height);
}

function pintarRectangulo({ posX, posY, ancho, alto}){
    ctx.fillRect(posX, posY, ancho, alto);
}

function pintarImagenDeFondo(){
    ctx.drawImage(imagenFondo, 0,0, canvas.width, canvas.height);
}
