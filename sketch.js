var Harry, HarryFlying, HarryStanding;
var Background, BackgroundImg;
var Accio, AccioImg, Expecto, ExpectoImg, Expelliarmus, ExpelliarmusImg, Avada, AvadaImg;
var AccioG,ExpectoG,ExpelliarmusG,AvadaG;
var GameOver, GameOverImg, Reset, ResetImg;
var score = 0;
var PLAY = 1;
var gameState = PLAY;
var END = 0;


function preload() {
  BackgroundImg = loadImage("Background.png");
  HarryFlying = loadImage("HarryFlying.png");
  HarryStanding = loadImage("HarryStanding.png");
  AccioImg = loadImage("Accio.png");
  ExpectoImg = loadImage("Expecto.png");
  ExpelliarmusImg = loadImage("Expelliarmus.png");
  AvadaImg = loadImage("Avada.png");
  GameOverImg = loadImage("GameOver.png");
  ResetImg = loadImage("reset.png");
}

function setup() {
  createCanvas(600, 300);

  // Add Background
  Background = createSprite(600,300);
  Background.addImage("Background", BackgroundImg);
  
  

  // Add Harry
  Harry = createSprite(50, 160, 20, 50);
  Harry.addImage("Standing", HarryStanding);
  Harry.scale = 0.1;
  Harry.addImage("Flying", HarryFlying);
  

  // Add Spells
  

  Expecto = createSprite(150, 100); // Set the position of Expecto sprite
  Expecto.addImage("expecto", ExpectoImg);
  Expecto.scale=0.3;

  Expelliarmus = createSprite(400, 100); // Set the position of Expelliarmus sprite
  Expelliarmus.addImage("expelliarmus", ExpelliarmusImg);
    Expelliarmus.scale = 0.3;

  Avada = createSprite(500, 100); // Set the position of Avada sprite
  Avada.addImage("avada", AvadaImg);
    Avada.scale = 0.09;

  // Add GameOver
  GameOver = createSprite(300, 100);
  GameOver.addImage("gameover", GameOverImg);
  GameOver.scale = 0.5;


  // Add Reset
  Reset = createSprite(350, 160);
  Reset.addImage("reset", ResetImg);
  Reset.scale = 0.2;

  score=0;

  AccioG=new Group();
ExpectoG=new Group();
ExpelliarmusG=new Group();
AvadaG=new Group();
}
 

function draw(){
 
  
HarryStanding.visible=true;
HarryFlying.visible=false;



if(gameState === PLAY){
  if (Background.x < 0){
    Background.x = Background.width/2;
  }
  edges= createEdgeSprites();
  Harry.collide(edges);
GameOver.visible=false;
Reset.visible=false;
HarryStanding.visible=true;

if(keyDown("space")){
  Harry.changeAnimation("Flying", HarryFlying);
  text("Score: "+ score, 500,50)
  fill=("purple");
createAccio();
/*createExpelliarmus();
createExpecto();
createAvada();*/
Background.velocityX = -1;

gameState===PLAY;
}

if(keyDown("up_arrow")){
Harry.velocityY=-2;
}
if(keyDown("down_arrow")){
  Harry.velocityY=+2;
  }
  if (AccioG.isTouching(Harry)) {
    AccioG.destroyEach();
    score=score+5;
  }
  else if (ExpelliarmusG.isTouching(Harry)) {
    ExpelliarmusG.destroyEach();
    score=score+5;
    
  }else if(ExpectoG.isTouching(Harry)) {
    ExpectoG.destroyEach();
    score= score +5;
    
  }else{
    if(AvadaG.isTouching(Harry)) {
      gameState=END;
     
      
      AccioG.destroyEach();
      ExpelliarmusG.destroyEach();
      ExpectoG.destroyEach();
      AvadaG.destroyEach();
      
      AccioG.setVelocityYEach(0);
      ExpelliarmusG.setVelocityYEach(0);
      ExpectoG.setVelocityYEach(0);
      AvadaG.setVelocityYEach(0);

      Harry.changeAnimation("Standing", HarryStanding);
      Harry.velocityY=0;
      Harry.visible=true;
      GameOver.visible=true;
      Reset.visible=true;

}
}

  drawSprites();
 
  
  
}}

    
function createAccio() {
  if (frameCount % 100 == 0) {
  var Accio = createSprite(600,140, 90, 90);
  Accio.addImage(AccioImg);
  //Accio.scale=0.12;
  Accio.velocityX = -3;
  Accio.lifetime = 150;
  Accio.add(AccioG);

  }
}

/*function createExpelliarmus() {
 if (World.frameCount % 320 == 0) {
  var Expelliarmus = createSprite(Math.round(random(50,350),40, 10, 10));
  Expelliarmus.addImage(ExpelliarmusImg);
  Expelliarmus.scale=0.03;
  Expelliarmus.velocityY = 3;
  Expelliarmus.lifetime = 150;
  Expelliarmus.add(ExpelliarmusG);
}
}
function createExpecto() {
  if (World.frameCount % 320 == 0) {
  var Expecto = createSprite(Math.round(random(50,350),40, 10, 10));
  Expecto.addImage(ExpectoImg);
  Expecto.scale=0.03;
  Expecto.velocityY = 3;
  Expecto.lifetime = 150;
  Expecto.add(ExpectoG);
}
}
function createAvada() {
  if (World.frameCount % 320 == 0) {
  var Avada = createSprite(Math.round(random(50,350),40, 10, 10));
  Avada.addImage(AvadaImg);
  Avada.scale=0.03;
  Avada.velocityY = 3;
  Avada.lifetime = 150;
  Avada.add(AvadaG);
}
}
*/
