
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
     
    bob1 = new Bob(300,600);
    bob2 = new Bob(350,600);
   	bob3 = new Bob(400,600);
    bob4 = new Bob(450,600);
    bob5 = new Bob(500,600);
    roof = new Roof(400,300,300,20);

    rope1 = new Rope(bob1.body,roof.body,-100,0);
    World.add(world,rope1);

    rope2 = new Rope(bob2.body,roof.body,-50,0);
    World.add(world,rope1)

    rope3 = new Rope(bob3.body,roof.body,0,0);
    World.add(world,rope1);

    rope4 = new Rope(bob4.body,roof.body,50,0);
    World.add(world,rope1);

    rope5 = new Rope(bob5.body,roof.body,100,0);
    World.add(world,rope1)

    
	Engine.run(engine);
  
}


function draw() {

  Engine.update(engine)
  rectMode(CENTER);
  background("white");
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();

  rope1.display();
  rope2.display();
  rope3.display(); 
  rope4.display();
  rope5.display();

  
  drawSprites();
 
}
 
function keyPressed(){

  if(keyCode=== UP_ARROW){
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:0});           
  }
}


