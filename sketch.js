
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1,ground1,dustbinimg
var dustbin1,dustbin2,dustbin3

function preload()
{
	dustbinimg=loadImage("dustbingreen.png")
}
function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	ground1= new ground(600,685,1200)
	
	
	dustbin1= new dustbin(1050,570,20,200,)
	dustbin3= new dustbin(870,570,20,200)
	dustbin2= new dustbin(970,665,200,20)
	
	paper1=new paper()
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("ash");
  paper1.display();
  ground1.display();
 
  dustbin1.display()
	dustbin3.display()
	dustbin2.display()
	
	image(dustbinimg,850,450,[250],[230])
}

function keyPressed()
{
	if(keyCode===UP_ARROW)
	{
		Matter.Body.applyForce(paper1.body,paper1.position,{x:85,y:-85});
	}
}

