var cake,cakeImage;
function preload(){
  cakeImage = loadImage("cake.jpg");
}

function setup() {
  createCanvas(500,500);
  cake = createSprite(350,400,200,200);
  cake.addImage(cakeImage);
  cake.scale = 0.25;
  }

function draw() {
  background("black");  
 
  drawSprites();
}

