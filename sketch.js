
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var log1;
var ball1;
var chain1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	log1 = new Log (400,150,500,PI/2)

	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

  log1.display();

  drawSprites();
 
}



