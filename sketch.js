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
var ball_demolition,rope;
var ball_demolition_con;

var btn1;
var btn2;
var btn1_Img;
var btn2_Img;
var bg_img;
var ball;
var bola_de_demolicao;
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

  rope = new Rope(7.5,{x:400,y:30});
  ball_demolition = Bodies.circle(300,300,20);
  Matter.Composite.add(rope.body,ball_demolition);

  ball_demolition_con = new Link(rope,ball_demolition);

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
  imageMode(CENTER);


  
}

function draw() 
{
  background(51);

  if(keyDown(LEFT_ARROW)){
    LeftForce();
  }

  if(keyDown(RIGHT_ARROW)){
    RightForce();
  }

  if(keyDown(UP_ARROW)){
    UpForce();
  }

  if(keyDown(DOWN_ARROW)){
    DownForce();
  }




  image(bg_img,width/2,height/2,960,635);

  image(ball,ball_demolition.position.x,ball_demolition.position.y,70,70);
  rope.show();
  Engine.update(engine);
  ground.show();

  collide(ball_demolition,casa1,85);
  collide(ball_demolition,casa2,95);
  collide(ball_demolition,casa3,85);
  collide(ball_demolition,casa4,85);
  collide(ball_demolition,casa5,85);
  collide(ball_demolition,casa6,120);
  collide(ball_demolition,casa7,120);
      


  drawSprites();

  fill(0, 0, 0);
  textSize(35);
  text("Aperte as setas para mover a bola",250, 600);


}


function RightForce() {
  Matter.Body.applyForce(ball_demolition,{x:0, y:0}, {x:0.001, y:0});
}



function LeftForce() {
  Matter.Body.applyForce(ball_demolition,{x:0, y:0}, {x:-0.001, y:0});
}

function UpForce() {
  Matter.Body.applyForce(ball_demolition,{x:0, y:0}, {x:0, y:-0.001});
}

function DownForce() {
  Matter.Body.applyForce(ball_demolition,{x:0, y:0}, {x:0, y:0.001});
}

function collide(body,sprite,x)
{
  if(body!=null)
        {
         var d = dist(body.position.x,body.position.y,sprite.position.x,sprite.position.y);
          if(d<=x)
            {
              sprite.destroy();
              return true; 
            }
         }
}
