
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	bobObject1 = new Bob(100,600,90);
	bobObject2 = new Bob(190,600,90);
	bobObject3 = new Bob(280,600,90);
	bobObject4 = new Bob(370,600,90);
	bobObject5 = new Bob(460,600,90);
	roof = new Roof(280,150,480,50);

	rope1 = new Rope(bobObject1.body,roof.body,-180,0);
	rope2 = new Rope(bobObject2.body,roof.body);
	rope3 = new Rope(bobObject3.body,roof.body);
	rope4 = new Rope(bobObject4.body,roof.body);
	rope5 = new Rope(bobObject5.body,roof.body);
	
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgreen");
  
	bobObject1.display();
	bobObject2.display();
	bobObject3.display();
	bobObject4.display();
	bobObject5.display();
	roof.display();
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
  drawSprites();
 
}



