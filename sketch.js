var bullet, thickness;
var speed, weight;
var wall;


function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
thickness=random(22,83);
weight=random(30,52);
speed.random(223,321);
bullet=createSprite(50,200,50,50);
wall=createSprite(1200,200,thickness,height/2);
bullet.debug=true;
wall.debug=true;
}

function draw() {
  background(255,255,255);  
bullet.velocityX=speed;
if(hasCollided(lbullet, lwall)){
  bullet.velocityX=0;
var damage=0.5 * speed * speed/(thickness * thickness * thickness);}
if(damage>10){
  wall.shapeColor=color(255,0,0);
}
if(damage<10){
  wall.shapeColor=color(0,255,0);
}
}
function hasCollided(lbullet, lwall){
bulletRightEdge=lbullet.x+lbullet.width;
wallLeftEdge=lwall.x;
if(bulletRightEdge>=wallLeftEdge){
  return true;
}
return false;
}