var bullet ,speed,weight;
var wall,weight;
function setup() {
  createCanvas(1600,400);
  car = createSprite(40, 200, 50, 50);
  wall = createSprite(1200, 200, thickness, height/2);
  speed=random(223,321);
  weight=random(30,52);
  thinkness=random(22,83);
  car.velocityX=speed;
}

function draw() {
  background(255,255,255);  
  if(wall.x=car.x <(car.width+wall.width)/2){
    car.velocityX = 0;
    var deformaion=0.5*witdh*speed*speed/22509;
    if(deformation>180)
    {
      car.shapColor = color(255,0,0)
    }
    if(deformation) 180 && deformation>100;
    car.shapeColor=color(230,230,0)
    if(defromation<100){
      car.shapeColor=color(0,255,0);
    }
    if(collided(bullet,wall)){
      bullet.velocity=0;
      var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    
    if (damage>10){
      wall.shapeColor=color(255,0,0);
    }

    if(damage>10){
      wall.shapeColor=color(255,0,0);
    }
    }
  
  }
  drawSprites();
}
function collided(lbullet,lwall){
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge=wallLeftEdge){
    return  true;
  }
  return false;
}