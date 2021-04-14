
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,stones;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(950,230,30);
	mango3=new mango(1130,150,30);
	mango4=new mango(1010,105,30);
	mango5=new mango(1065,180,30);
	mango6=new mango(900,180,30);
	mango7=new mango(1200,205,30);
	stones = new stone(220,410,30);
	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	launcherObject = new connect(stones.body,{x:220,y:410});
	Engine.run(engine);

}

function draw() {
  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
stones.display();
  groundObject.display();
  launcherObject.display();
}
function mouseDragged(){
    Matter.Body.setPosition(stones.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    connect.fly();
}
