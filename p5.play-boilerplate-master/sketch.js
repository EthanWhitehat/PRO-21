var bullet
var wall
var speed
var weight
var thickness




function setup() {
  createCanvas(1600,400);
  bullet =createSprite(50, 200, 50, 50);
  wall = createSprite(1200,200,thickness,height/2)

  speed=random(223,83)
  weight = random(30,520)

  bullet.velocityX = speed
}

function draw() {
  background("black");  

  if (wall.x-bullet.x <(bullet.width+bullet.width)/2) {
    bullet.velocityX = 0
    var deformation=0.5 *weight*speed*speed/22509
    if (deformation>180) {
      bullet.shapeColor=color(255,0,0)

      
    }
    if (deformation<180 && deformation>100) {
      bullet.shapeColor=color(230,230,0);

      
    }
    if (deformation<100) {
      bullet.shapeColor=color(0,255,0)
      
    }
    if (hasCollided(bullet,wall)) {
      bullet.velocityX=0
      var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)

      if (damage>10) {
        wall.shapeColor="red"
      }
      if (damage<10) {
        wall.shapeColor="green"
      }
    }
    
  }
  drawSprites();
}
function hasCollided(lbullet,lwall){
  bulletRightEdge=lbullet.x+lbullet,width;
  wallLeftEdge=lwall.x;
  if (bulletRightEdge=wallLeftEdge) {
    return true
  } 
    return false;
  
}
