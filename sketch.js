var Engine = Matter.Engine,
    World = Matter.World,
    Events = Matter.Events,
    Bodies = Matter.Bodies; 
function setup() {
  createCanvas(700, 600);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  ball=new Ball(60,500,20);
  div1=new Divisions(700,540,10,1100);
  div2=new Divisions(700,270,200,10);
  div3=new Divisions(5,540,10,1100);
  div4=new Divisions(300,5,800,10);
  div5=new Divisions(600,250,10,50);
}
 
function draw() {
  background("black");
  fill("white");
  textSize(50);
  text("BasketBall!",15,55);
  textSize(20);
  text("Presiona la barra espaciadora para lanzar",15,90);
  Engine.update(engine);
  ground.display();
  ball.display();
  div1.display();
  div2.display();
  div3.display();
  div4.display();
  div5.display();
}
function keyPressed(){
  if(keyCode==32){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:0.09,y:-0.1});
  }
}

