var thickness, wall;
var bullet, speed, weight, height;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 60, 6);
  thickness = random(22,83);
  height = 400;
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = 80,80,80;  
  speed = random(223,321);
  weight = random(30,52);
  bullet.velocityX = speed;
  temp = bullet.x;
}

function draw() {
  background(255,255,255);  
  console.log(temp);

  if(hasCollided(bullet, wall)){
   bullet.velocityX = 0;
   bullet.x = 500;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness)
    if(damage>10){
      wall.shapeColor = color(0,255,0);
    }
    else if (damage<10) {
      wall.shapeColor = color(255, 0, 0);
    }
}
  
    drawSprites();
}

function hasCollided(bullet, wall) {
bulletRightEdge = bullet.x + bullet.width;
wallLeftEdge = wall.x;
if(bulletRightEdge >= wallLeftEdge){
  return true
}
  return false;
}
