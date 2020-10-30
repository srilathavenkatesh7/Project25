
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	var canvas=createCanvas(1300,800);
    

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

  ground1=new Ground(650,700,1300,20);
	paper1=new Paper(120,100,65);
  bin1=new Bin(1280,580,20,220);
  bin2=new Bin(1100,580,20,220);
  bin3=new Bin(1190,680,160,20);
}


function draw() {
	
  background(100);
  Engine.update(engine);
  paper1.display();
  ground1.display();
  bin3.display();
  
  
  
 
}

function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:130,y:-130});
  }
  
}


