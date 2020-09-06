const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var division1,division2,division3,division4,division5,division6,division7,division8,division9;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  createSprite(400, 200, 50, 50);

  ground=new ground(200,390,800,20);
  
  division1=new Division(5,385,10,100);
  division2=new Division(50,385,10,100);
  division3=new Division(100,385,10,100);
  division4=new Division(150,385,10,100);
  division5=new Division(200,385,10,100);
  division6=new Division(250,385,10,100);
  division7=new Division(300,385,10,100);
  division8=new Division(350,385,10,100);
  division9=new Division(395,385,10,100);

  for(i=40 ; i<=width;i=i+50){
    Plinko.push(new Plinko(i=75)
  }
  for(i=15 ; i<=width-10;i=i+50){
    Plinko.push(newPlinko(i=175)
  }
  for(i=30 ; i<=width-10;i=i+50){
    Plinko.push(newPlinko(i=275)
  }
  for(i=15 ; i<=width-10;i=i+50){
    particles.push(newParticles(i=175)
  }
}

function draw() {
  background(0,0,0);  
  drawSprites();

  ground.display();
  division.display();

}