const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Constraint=Matter.Constraint
var engine, world, body;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16
var ground
var polygonal
function preload(){

}

function setup() {
  createCanvas(1200,400);
  engine=Engine.create()
  world=engine.world;
  block1=new Box(1000, 92, 40, 60)
  block2=new Box(960,148, 40, 55)
  block3=new Box(1000, 148, 40, 55)
  block4=new Box(1040,148, 40, 55)
  block5=new Box(920, 203, 40, 55)
  block6=new Box(960, 203, 40, 55)
  block7=new Box(1000, 203, 40, 55)
  block8=new Box(1040, 203, 40, 55)
  block9=new Box(1080, 203, 40, 55)
  block10=new Box(880, 256, 40, 55)
  block11=new Box(920, 256, 40, 55)
  block12=new Box(960, 256, 40, 55)
  block13=new Box(1000, 256, 40, 55)
  block14=new Box(1040, 256, 40, 55)
  block15=new Box(1080, 256, 40, 55)
  block16=new Box(1120, 256, 40, 55)
  ground=new Ground(600, 390, 1200, 15)
  polygonal=Bodies.circle(50, 200, 20);
}

function draw() {
 background("black")
 block1.display()
 block2.display()
 block3.display()
 block4.display()
 block5.display()
 block6.display()
 block7.display()
 block8.display()
 block9.display()
 block10.display()
 block11.display()
 block12.display()
 block13.display()
 block14.display()
 block15.display()
 block16.display()
 ground.display()
 polygonal.display()
}

function mouseDragged()
{
  
  Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
}
function mouseReleased()
{
  connect.fly()
  gameState="launch"
}
async function time()
{
  var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
  var data=await response.json()
  var time=data.datetime
  var hrs=time.slice(11, 13)
  if(hrs>=6&&hrs<=18)
  {
    backgroundImg=loadImage("Images/bg.png")
  }
  else
  {
    backgroundImg=loadImage("Images/bg2.jpg")
  }
  
}
function keyPressed()
{
  if(keyCode==32)
  {
    Matter.Body.setPosition(bird.body,{x:150, y:50})
    connect.join(bird.body)
    Matter.Body.setAngle(bird.body,0)
    gameState="OnSling"
  }
}
