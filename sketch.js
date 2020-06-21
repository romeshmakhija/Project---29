const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies; 
const Constraint = Matter.Constraint;

var engine,world;
var block1,polygon;
var slingshot,ground1;
var rock;

function setup() {
  createCanvas(1000,400);
  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(500,386,1000,27);
  ground2 = new Ground(460,250,180,20);
  ground3 = new Ground(750,170,180,20);

  block1 = new Block(400,230,30,30);
  block2 = new Block(430,230,30,30);
  block3 = new Block(460,230,30,30);
  block4 = new Block(490,230,30,30);
  block5 = new Block(520,230,30,30);

  block6 = new Block(415,190,30,40);
  block7 = new Block(445,190,30,40);
  block8 = new Block(475,190,30,40);
  block9 = new Block(505,190,30,40);

  block10 = new Block(445,150,30,30);
  block11 = new Block(475,150,30,30);

  block12 = new Block(692,130,30,30);
  block13 = new Block(722,130,30,30);
  block14 = new Block(752,130,30,30);
  block15 = new Block(782,130,30,30);
  block16 = new Block(812,130,30,30);

  block17 = new Block(710,80,30,40);
  block18 = new Block(740,80,30,40);
  block19 = new Block(770,80,30,40);
  block20 = new Block(800,80,30,40);

  block21 = new Block(740,40,30,30);
  block22 = new Block(770,40,30,30);

  rock = new Rock(140,290,20,20);

  slingshot = new Slingshot(rock.body,{x:140,y:300})

}

function draw() {
  background(20,30,255); 
  Engine.update(engine);
  
  ground1.display();
  ground2.display();
  ground3.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  rock.display();
  slingshot.display();

}

function mouseDragged(){
  Matter.Body.setPosition(rock.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingshot.fly();
}