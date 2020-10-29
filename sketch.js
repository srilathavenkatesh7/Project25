
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	var canvas=createCanvas(700,800);
    

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

  ground1=new Ground(350,700,700,20);
	paper1=new Paper(200,100,20);
  bin1=new Bin(680,630,20,120);
  bin2=new Bin(500,630,20,120);
  bin3=new Bin(590,680,160,20);
}


function draw() {
	
  background(0);
  Engine.update(engine);
  ground1.display();
  paper1.display();
  bin1.display();
bin2.display();
bin3.display();
  
 
}

function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:80,y:150});
  }
}


