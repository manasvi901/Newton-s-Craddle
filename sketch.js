
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world,body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	rope1 = new Rope(bobObject1.body,roofObject.body,-bobDiameter*2,0)
rope2 = new Rope(bobObject2.body,roofObject.body,-bobDiameter*2,0)
rope3 = new Rope(bobObject3.body,roofObject.body,-bobDiameter*2,0)
rope4 = new Rope(bobObject4.body,roofObject.body,-bobDiameter*2,0)
rope5 = new Rope(bobObject5.body,roofObject.body,-bobDiameter*2,0)
bobObject1 = new Bob(200, 550, 5);
bobObject2 = new Bob(300, 550, 5);
bobObject3 = new Bob(400, 550, 5);
bobObject4 = new Bob(500, 550, 5);
bobObject5 = new Bob(600, 550, 5);
roof1 = new Roof(100,100,800,20) 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}

function display(){
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
	bobObject1.display();
	bobObject2.display();
	bobObject3.display();
	bobObject4.display();
	bobObject5.display();
}

