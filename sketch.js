  const Engine = Matter.Engine;
  const World = Matter.World;
  const Events = Matter.Events;
  const Bodies = Matter.Bodies;
  const Constraint = Matter.Constraint;
 
var ground;
var b1 , b2 , b3 , b4 ,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18,b19,b20,b21,b22;
var ball;
var rope;


function setup() {
  createCanvas(800, 500);
  engine = Engine.create();
  world = engine.world;

ground = new Ground(600,436,1200,120);
 b1 = new Box(300,400,50,50);
 b2 = new Box(300,350,50,50);
 b3 = new Box(300,300,50,50);
 b4 = new Box(300,250,50,50);
 b5 = new Box(300,200,50,50);
 b6 = new Box(350,400,50,50);
 b7 = new Box(350,350,50,50);
 b8 = new Box(350,300,50,50);
 b9 = new Box(350,250,50,50);
 b10 = new Box(350,200,50,50);
 b11 = new Box(400,400,50,50);
 b12 = new Box(400,350,50,50);
 b13 = new Box(400,300,50,50);
 b14 = new Box(400,250,50,50);
 b15 = new Box(400,200,50,50);
 b16 = new Box(450,400,50,50);
 b17 = new Box(450,350,50,50);
 b18 = new Box(450,300,50,50);
 b19 = new Box(450,250,50,50);
 b20 = new Box(450,200,50,50);
 b21 = new Box(450,150,50,50);
 b22 = new Box(300,150,50,50);
 

  ball = new Ball(200,200,60,60);

 rope = new Rope(ball.body , { x:150 , y:7});
 

  
}
 


function draw() {
  background(240,185,190);
  
 
  Engine.update(engine);

  ground.display();
  stroke ("black");
  strokeWeight (2)
  fill ("lightblue");
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  b13.display();
  b14.display();
  b15.display();
  b16.display();
  b17.display();
  b18.display();
  b19.display();
  b20.display();

  fill ("red");
  b21.display();
  b22.display();
  

  ball.display();
  rope.display();
  
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body , { x:mouseX , y :mouseY});
}

