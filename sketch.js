
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

	leftWallDustbin = new DustBin(550,620,20,100);
	rightWallDustbin = new DustBin(670,620,20,100);
	bottomWallDustbin = new DustBin(610,660,100,20);
	//dustbin4 = new DustBin(620,390,100,10);
	paper = new Paper(100,300,10);
	ground= Bodies.rectangle(width/2,680,800,20,{isStatic:true});
	 World.add(world,ground);
	/* render = Matter.Render.create({element: document.body,engine:engine,                    
		options:{width:800,height:700}});
		Matter.Render.run(render);*/
}

function draw() {
   background("black");
   rectMode(CENTER);
   rect(ground.position.x,ground.position.y,800,20);
   leftWallDustbin.display();
   rightWallDustbin.display();
   bottomWallDustbin.display();
   //dustbin4.display();
   paper.display();
  
   drawSprites();

 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:10,y:-15});

	}
}



