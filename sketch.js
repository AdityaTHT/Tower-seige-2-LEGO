const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ground,platform1,platform2;

var block1,block2,block3,block4,block5,block6,block7,block8,
block9,block10,block11,block12,block13,block14,block15,block16;

var score = 0;
function preload(){
  polygonImg = loadImage("Images/hexagon1.png");
  legoImg = loadImage("Images/lego_logo.jpeg");
}

function setup() {
  createCanvas(1500,700);

  engine = Engine.create();
  world = engine.world;

  var lego = createSprite(50,50,20,20);
  lego.addImage("legoImage",legoImg);
  lego.scale = 0.4;

  platform1 = new Ground(424,554,720,10);
  ground = new Ground(750,680,1500,24);
  
  var polygon_options ={
    'restitution':0.02,
    'friction':0.5,
    'density':1.2
  }
  polygon = Bodies.circle(1200,450,30,polygon_options);
  World.add(world,polygon);

  block1 = new Block7(125,511);
  block2 = new Block7(225,511);
  block3 = new Block7(325,511);
  block4 = new Block7(425,511);
  block5 = new Block7(525,511);
  block6 = new Block7(625,511);
  block7 = new Block7(725,511);

  block8 = new Block5(225,450);
  block9 = new Block5(325,450);
  block10 = new Block5(425,450);
  block11 = new Block5(525,450);
  block12 = new Block5(625,450);
  
  block13 = new Block3(325,400);
  block14 = new Block3(425,400);
  block15 = new Block3(525,400);

  block16 = new Block1(425,340);

  slingshot = new Slingshot(this.polygon,{x:1200,y:450});
}

function draw() {
  background(0);  
  Engine.update(engine);

  fill(255,20,147);
  textSize(40);
  text("score :"+score,1100,120);
  console.log(score);

  fill("#00FFFF")
  textSize(40);
  text("Drag and release the polygon to hit lego blocks.",300,60);

  platform1.display();
  ground.display();
  
  imageMode(CENTER);
  image(polygonImg,polygon.position.x,polygon.position.y,60,50);

  block1.display();
  block1.score();

  block2.display();
  block2.score();

  block3.display();
  block3.score();

  block4.display();
  block4.score();

  block5.display();
  block5.score();

  block6.display();
  block6.score();

  block7.display();
  block7.score();

  block8.display();
  block8.score();

  block9.display();
  block9.score();

  block10.display();
  block10.score();

  block11.display();
  block11.score();

  block12.display();
  block12.score();

  block13.display();
  block13.score();

  block14.display();
  block14.score();

  block15.display();
  block15.score();

  block16.display();
  block16.score();

  slingshot.display();

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
    slingshot.attach(this.polygon);
  }
}