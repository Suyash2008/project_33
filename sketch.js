const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world;
var divisionHeight = 300;
var gamestate = "start";
var count = 0;
var score = 0;
var particle;
var particles = [];
  var divisions = [];
  var plinkos = []
function setup() {
  createCanvas(900,800);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(450,790,900,10);
  for(var k = 0;k <= width;k = k + 80){
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight))
  }
  for(var j = 40;j <=width;j=j+50){
    plinkos.push(new Plinko(j,75,10))
  }
  for(var j = 15;j <=width-10;j=j+50){
    plinkos.push(new Plinko(j,175,10))
  }
  for(var j = 40;j <=width;j=j+50){
    plinkos.push(new Plinko(j,275,10))
  }
  for(var j = 15;j <=width-10;j=j+50){
    plinkos.push(new Plinko(j,375,10))
  }
  particle = new Particle(mouseX,10,10,10)
  

}

function draw() {
  background(bg);
  Engine.update(engine);  
  drawSprites();
  text(mouseX,100,200)
  text(mouseY,150,200)
  text("Score "+score,420,30)
  
  textSize(30)
  text("500",20,520)
  text("500",100,520)
  text("500",180,520)
  text("500",260,520)
  text("100",340,520)
  text("100",420,520)
  text("100",500,520)
  text("200",580,520)
  text("200",660,520)
  text("200",740,520)
  ground.display();
  


  for(var k = 0;k< divisions.length;k++){
    divisions[k].display();
  }
  for(var i = 0;i< plinkos.length;i++){
    plinkos[i].display();
  }
  if(particle!=null){
    particle.display();
    if(particle.body.position.y>760){
      if(particle.body.position.x<300){
        score = score + 500;
        particle = null;
        if(count >= 5){

          gamestate = "end";
        }
        
      }
      else if(particle.body.position.x>301 && particle.body.position.x<600){

        
        score = score + 100;
        console.log(score)
        particle = null;
        if(count >= 5){

          gamestate = "end";
        }
      }
       else if(particle.body.position.x>601 && particle.body.position.x<900){

        
        score = score + 200;
        particle = null;
        if(count >= 5){

          gamestate = "end";
        }
      }
    }
  }
}

function keyPressed(){
  if(keyCode === 32){

  
  
  if(gamestate !== "end"){
    count++;
    particle= new Particle(mouseX,10,10)
  }
}
}
