var containerImagen;
var container;

function setup() {
  // put setup code here
  print("initialize");
  container = createCanvas(1920, 1080);
  container.style("z-index", "-1");
  container.position(0,0);
  initialize();
}

function draw() {
  // put drawing code here
  background(0, 0, 0);
  drawImage();

}


function initialize (){
initializeImage();


}

// Para cada elemento nuevo que dibujaré en mi canvas,
//necesitare escribir dos funciones
// Mis funciones para mi IMAGEN
function initializeImage () {
      containerGatito = select("#containerImagen");
      containerGatito.mouseOver(gatitoOver);
      containerGatito.mouseOut(gatitoOut);
}


function drawImage() {
  containerGatito.position(0, 0);
  containerGatito.size(width,height);

}


function gatitoOver(){
  print("OVER");
}


function gatitoOut(){
  print("OUT");
}
