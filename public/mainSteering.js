var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");
ctx.font = "16px Arial";

var imagenFondo = new Image();
imagenFondo.src = "https://i.imgur.com/gtXNQPH.png";

var puntero = new Image();
puntero.src = "https://i.imgur.com/asTsWfu.png";

pintarImagenDeFondo();

var canvasX;
var canvasY;

var rect = {
  posX: 0,
  posY: 0,
  ancho: 100,
  alto: 100
}

const LIMITE_INFERIOR = 198;
const LIMITE_SUPERIOR = 202;

canvas.addEventListener("mousemove", function (e) {
  var cRect = canvas.getBoundingClientRect();
  canvasX = Math.round(e.clientX - cRect.left);
  canvasY = Math.round(e.clientY - cRect.top);

  rect.posX = canvasX;
  rect.posY = canvasY;

  limpiarCanva();

  pintarImagenDeFondo();

  console.log(`pos x${canvasX}`);
  console.log(`pos y${canvasY}`);

  pintarPuntero(rect);

  if (estaEnElCentroX()) {
    if (estaEnElCentroY()) {
      alert("Tarea Completada");
    }
  }

});

function estaEnElCentroX() {
  if (canvasX >= LIMITE_INFERIOR) {
    if (canvasX <= LIMITE_SUPERIOR) {
      return canvasX

    }
  }
}

function estaEnElCentroY() {
  if (canvasY >= LIMITE_INFERIOR) {
    if (canvasY <= LIMITE_SUPERIOR) {
      return canvasY
    }
  }

}

function pintarImagenDeFondo() {
  ctx.drawImage(imagenFondo, 0, 0, canvas.width, canvas.height);
}

function limpiarCanva() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function pintarPuntero( { posX, posY, ancho, alto } ){
  ctx.drawImage(puntero, posX, posY, ancho, alto);
}
