const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;
	bobObject1 = new Bob(320,600,90);
	bobObject2 = new Bob(410,600,90);
	bobObject3 = new Bob(500,600,90);
	bobObject4 = new Bob(590,600,90);
	bobObject5 = new Bob(680,600,90);
	roof = new Roof(500,150,480,50);

	rope1 = new Rope(bobObject1.body,roof.body,-180,0);
	rope2 = new Rope(bobObject2.body,roof.body,-90,0);
	rope3 = new Rope(bobObject3.body,roof.body,0,0);
	rope4 = new Rope(bobObject4.body,roof.body,90,0);
	rope5 = new Rope(bobObject5.body,roof.body,180,0);
	
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

function keyPressed() {
	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(bobObject1.body, bobObject1.body.position, {x:-500,y:305})

	}


}
