var sea,seaImg;
var ship,shipImg;

function preload(){
seaImg = loadImage("sea.png");
shipImg = loadAnimation("ship-1.png", "ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(200,200);
  sea.addImage("sea",seaImg);
  sea.scale = 0.5;
  ship = createSprite(150,250,10,10);
  ship.scale = 0.2;
  ship.addAnimation("ship",shipImg);
}

function draw() {
  background(0);
 if(sea.x < 0){
   sea.x = sea.width/8;
  }
  sea.velocityX = -3;
  drawSprites();
}