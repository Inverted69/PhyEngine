const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myWorld,myEngine;

var ground,ball;

var groundOptions,ballOptions;

function setup() {
  createCanvas(800,400);

  myEngine = Engine.create();
  myWorld = myEngine.world;
  
  groundOptions = {
    isStatic : true
  }
  ground = Bodies.rectangle(400,390,800,20,groundOptions);
  World.add(myWorld,ground);
  
  ballOptions = {
    restitution : 0.65
  }
  ball = Bodies.circle(400,200,30,ballOptions);
  World.add(myWorld,ball);

  console.log(ball);

}

function draw() {
  background("orange");  

  Engine.update(myEngine);
  
  push();
  rectMode(CENTER);
  fill("green");
  rect(ground.position.x,ground.position.y,800,20);
  pop();  
  ellipseMode(RADIUS);
  fill("white");
  stroke("blue");
  strokeWeight(3);
  ellipse(ball.position.x,ball.position.y,30,30);
}