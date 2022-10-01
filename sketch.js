function preload(){
  dogAnimation = loadAnimation("asset/1.png", "asset/2.png", "asset/3.png", "asset/4.png");
  bgImage = loadImage("asset/background.png");
  coinsImage = loadImage("asset/coinz.png");
  sticksImage = loadImage("asset/sticks.png");
  hurdleImage = loadImage("asset/hurdle.png");
}

function setup() {
 createCanvas(700, 500);
 bg = createSprite(350, 250, 700, 500);
 bg.addImage(bgImage);
 bg.scale = 3
 bg.velocityX = -1
 dog = createSprite(70, 350, 40, 30);
 dog.addAnimation("movingDog", dogAnimation)
 invisibleGround = createSprite(350, 480, 700, 5)
 invisibleGround.visible = false;
}

function draw() {
 background("Gray");
 if(bg.x < 100){
  bg.x = bg.width/2
 }
 drawSprites();
 CreateObstacle()

 if(keyDown("space")){
  dog.velocityY = -10 
 }
 dog.velocityY += 1
 
dog.collide(invisibleGround);
}


function CreateObstacle(){
  if(frameCount % 100 === 0){
    hurdle = createSprite(700, 400);
    rand = Math.round(random(1, 2))
    switch(rand){
      case 1: hurdle.addImage(hurdleImage);
      break;
      case 2: hurdle.addImage(sticksImage);
      break;
      default: break;
    }
    hurdle.velocityX = -5;
    hurdle.lifetime = 700 / 5
    hurdle.scale = 0.1 
  }
} 