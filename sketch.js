var car, wall;
var speed, weight;









function setup() {
  createCanvas(1600,400);

  speed=random(55, 90);
  weight=random(1500, 400);
  
  car=createSprite(50, 200, 50, 50)

  car.velocityX=speed;

  car.shapeColor(225);

  wall=createSprite(1500, 200, 60, height/2);
  wall.shapeColor(80, 80, 80);
}

function draw() {
  background(0);  
  drawSprites();
}