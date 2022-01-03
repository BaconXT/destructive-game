const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var fruit,rope;
var fruit_con;

var btn1;
var btn2;
var btn1_Img;
var btn2_Img;
var bg_img;
var ball;
var guindaste;
var guindaste_Img;
var casa1;
var casa1_Img;
var casa2;
var casa2_Img;
var casa3;
var casa3_Img;
var casa4;
var casa4_Img
var casa5;
var casa5_Img;
var casa6;
var casa6_Img;
var casa7;
var casa7_Img;

function preload()
{
  btn2_Img = loadImage('button2.png');
  btn1_Img = loadImage('button1.png');
  bg_img = loadImage('campo.png');
  ball = loadImage('bola_de_demolicao.png');
  guindaste_Img = loadImage('guindaste.png');
  casa1_Img = loadImage('casa1.png');
  casa2_Img = loadImage('casa2.png');
  casa3_Img = loadImage('casa3.png');
  casa4_Img = loadImage('casa4.png');
  casa5_Img = loadImage('casa5.png');
  casa6_Img = loadImage('casa6.png');
  casa7_Img = loadImage('casa7.png');
}

function setup() 
{
  createCanvas(960,635);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(200,680,600,20);

  rope = new Rope(7,{x:400,y:30});
  fruit = Bodies.circle(300,300,20);
  Matter.Composite.add(rope.body,fruit);

  fruit_con = new Link(rope,fruit);

  casa1 = createSprite(630, 150, 50, 50);
  casa1.addImage(casa1_Img);
  casa1.scale = 0.5;

  casa2 = createSprite(697, 115, 50, 50);
  casa2.addImage(casa2_Img);
  casa2.scale = 0.5;

  casa3 = createSprite(790, 139, 50, 50);
  casa3.addImage(casa3_Img);
  casa3.scale = 0.5;

  casa4 = createSprite(660, 260, 50, 50);
  casa4.addImage(casa4_Img);
  casa4.scale = 0.5;

  casa5 = createSprite(777, 273, 50, 50);
  casa5.addImage(casa5_Img);
  casa5.scale = 0.5;

  casa6 = createSprite(681, 409, 50, 50);
  casa6.addImage(casa6_Img);
  casa6.scale = 0.5;

  casa7 = createSprite(790, 410, 50, 50);
  casa7.addImage(casa7_Img);
  casa7.scale = 0.5;
  
  guindaste = createSprite(200, 260, 100, 100);
  guindaste.addImage(guindaste_Img);
  guindaste.scale = 1;

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50);
  imageMode(CENTER);
  
}

function draw() 
{
  background(51);


  if(keyIsDown(RIGHT_ARROW)) {
    RightForce();

  }
  if(keyIsDown(LEFT_ARROW)) {
    LeftForce();

  }


  image(bg_img,width/2,height/2,960,635);

  image(ball,fruit.position.x,fruit.position.y,70,70);
  rope.show();
  Engine.update(engine);
  ground.show();




  drawSprites();
 
  

}


function RightForce() {
  Matter.Body.applyForce(ball,{x:0, y:0}, {x:1.5, y:-0.25});
}

function LeftForce() {
  Matter.Body.applyForce(ball,{x:0, y:0}, {x:-1.5, y:-0.25});
}