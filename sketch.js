//creating variable and constant required
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	//adding helicopter and package image
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	//creating canvas
	createCanvas(800, 700);
	rectMode(CENTER);
	
	//creating package sprite
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	//creating helicopter
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	//creating ground
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	//creating engine
	engine = Engine.create();
	//adding world in engine
	world = engine.world;

	//creating package
	packageBody = Bodies.circle(width/2 , 200 , 5 , {isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);

	//run engine
	Engine.run(engine);

	//creating box1
	rect1 = Bodies.rectangle(390, 650, 200, 50, {isStatic:true});
	World.add(world, rect1);

	//creating box2
	rect2 = Bodies.rectangle(496, 620, 50, 100, {isStatic:true});
	World.add(world, rect2);

	//creating box3
	rect3 = Bodies.rectangle(300, 620, 50, 100, {isStatic:true});
	World.add(world, rect3);
  
}


function draw() {	
	rectMode(CENTER);
	background(0);
	packageSprite.x= packageBody.position.x 
	packageSprite.y= packageBody.position.y 

	var p = rect2.position
	rectMode(CENTER);
	fill("red");
	rect(rect1.position.x, rect1.position.y, 200, 20);
	rect(p.x, p.y, 20, 100);
	rect(rect3.position.x, rect3.position.y, 20, 100);

	drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic(packageBody, false);
  }
}



