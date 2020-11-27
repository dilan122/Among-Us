var canvas = document.getElementById("game");
var ctx = canvas.getContext('2d');

ctx.fillStyle = "rgb(42,182,17)";


var butFill = document.getElementById("butFill");
butFill.addEventListener('click', moverRectangulo);


var imagenFondo = new Image();
imagenFondo.src ='https://i.imgur.com/xG4KhmT.png';

const LIMITE_CARGA = 448;

var rect = {
    posX : 81,
    posY : 10,
    ancho : 10,
    alto :  26
}

pintarImagenDeFondo();

var interval = null;

function moverRectangulo(){

    if( interval === null){
        interval = setInterval(function(){
                        
           if(rectanguloEstaEnElLimite()){
               alert("Tarea Completada");
               clearInterval(interval);
               interval = null;
           }
            rect.posX += 0.3;
            rect.ancho -= 0.3;
            limpiarTablero()
            pintarRectangulo(rect);
            pintarImagenDeFondo();

        
        }, 1);
    }else{
        clearInterval(interval);
        interval = null;
    }     
}

function rectanguloEstaEnElLimite(){
    return rect.posX >= LIMITE_CARGA;
}

function limpiarTablero(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}


function pintarRectangulo({ posX, posY, ancho, alto }){

    ctx.fillRect(posX, posY, ancho, alto);
}

function pintarImagenDeFondo(){
    ctx.drawImage(imagenFondo, 0, 0, canvas.width, canvas.height);

}