
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

	//Create the Bodies Here.
	paper = new Paper(100, 100, 50)
	ground = new Ground(width/2, height-30, width, 20)
   // bottom = new Dustbin(width/2, height-40, 200, 20)
	leftside = new Dustbin(width-100,height-90,200 ,100)
	//rightside = new Dustbin(width/2+100,height-90 ,20,100)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  Engine.update(engine) 
  paper.display()
  ground.display()
  //bottom.display()
  leftside.display()
  //rightside.display()
 
}


function keyPressed(){
	if(keyCode === UP_ARROW){

        Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
	}
}



