
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world,dustbin, paper;

function setup() {
	createCanvas(800, 700);
rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	dustbin = new DustBin(720,390,100,10);
	dustbin2 = new DustBin(700,300,100,10);
	dustbin3 = new DustBin(600,300,100,10);
	dustbin4 = new DustBin(620,390,100,10);
	paper = new Paper(100,300,10);
	ground= Bodies.rectangle(width/2,400,10,{isStatic:true});
     World.add(world,ground);
}

function draw() {
   background("black");
   rectMode(CENTER);
   dustbin.display();
   dustbin2.display();
   dustbin3.display();
   dustbin4.display();
   paper.display();
  
   drawSprites();
   keyPressed();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.body.applyForce(paper.body.position,{x:12,y:-13});

	}
}



