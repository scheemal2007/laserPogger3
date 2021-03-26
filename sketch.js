var player, playerImage
var laser1, laser2, laser3, laser4, laser5, laser6, laser7, laser8, laser9, laser10, laser11, laser12, laser13, laser14, laserImage
var button, button, buttonImage
var score = 0
var gameState = 0
var background1, backgroundImage

function preload(){
  playerImage = loadImage("lol.png")
  backgroundImage = loadImage("fds.jpg")
  laserImage = loadImage("ball.png")
}
function setup() {
  createCanvas(2200, 2000);
  background1 = createSprite(700,400,2200,800)
  background1.scale=7.5
  background1.addImage(backgroundImage)
  
  player = createSprite(700,400,25,25)
  player.scale=0.3
  player.addImage(playerImage)

  laser1 = createSprite(300,600,500,10)
  laser1.addImage(laserImage)
  laser1.scale=3
  laser1.velocityY = -2


  laser2 = createSprite(900,700,500,10)
  laser2.addImage(laserImage)
  laser2.scale=3
  laser2.velocityY = 2

  laser3 = createSprite(300,900,2000,30)
  laser3.addImage(laserImage)
  laser3.scale=3
  laser3.velocityY=-2

  laser4 = createSprite(800,900,2000,30)
  laser4.addImage(laserImage)
  laser4.scale=3
  laser4.veloctiyY = 2


  laser5 = createSprite(100,1100,2000,30)
  laser5.addImage(laserImage)
  laser5.scale=3
  laser5.velocityY = -2

  laser6 = createSprite(500,1100,2000,30)
  laser6.addImage(laserImage)
  laser6.scale=3
  laser6.velocityY = 2

  laser7 = createSprite(200,1350,2000,30)
  laser7.addImage(laserImage)
  laser7.scale=3
  laser7.velocityY = -2

  laser8 = createSprite(600,1350,2000,30)
  laser8.addImage(laserImage)
  laser8.scale=3
  laser8.velocityY = 2

  laser9 = createSprite(700,1500,2000,30)
  laser9.addImage(laserImage)
  laser9.scale=3
  laser9.velocityY = -2


  laser10 = createSprite(100,1500,2000,30)
  laser10.addImage(laserImage)
  laser10.scale=3
  laser10.velocityY = 2


  laser11 = createSprite(200,1350,2000,30)
  laser11.addImage(laserImage)
  laser11.scale=3
  laser11.velocityY = -2


  laser12 = createSprite(600,1350,2000,30)
  laser12.addImage(laserImage)
  laser12.scale=3
  laser12.velocityY = 2


  button = createSprite(500,1000,50,50)

 


}

function draw() {
  background(255,255,255);  

  if(keyDown(DOWN_ARROW)){
    player.y = player.y + 4

  }
  if(keyDown(UP_ARROW)){
    player.y = player.y - 4

  }if(keyDown(RIGHT_ARROW)){
    player.x = player.x + 4

  }if(keyDown(LEFT_ARROW)){
    player.x = player.x - 4
  }

  if(player.isTouching(laser1)||player.isTouching(laser2)||player.isTouching(laser3)||player.isTouching(laser4)||player.isTouching(laser5)||player.isTouching(laser6)||player.isTouching(laser7)||player.isTouching(laser8)||player.isTouching(laser9)||player.isTouching(laser10)||player.isTouching(laser11)||player.isTouching(laser12)||player.isTouching(laser13)||player.isTouching(laser14)){
    player.x = 600
    player.y = 400
  }
  
  drawSprites();
}
