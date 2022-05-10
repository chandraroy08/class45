
var car
var carsGroup
var riveImg
function preload() {
  f1car1 = loadImage("f1car1.png");
  f1car2 = loadImage("f1car2.png");
  f1car3 = loadImage("f1car3.png");
  f1car4 = loadImage("f1car4.png");
  f1car5 = loadImage("f1car5.png");
  road = loadImage("road.jpg");
  gameOverimg=loadImage("gameOver.jpg")
  riveImg=loadImage("river.jpg")
  boomImg=loadImage("boom.png")
}
function setup() {
  createCanvas(800,800);
  

   
   
   road_img = createSprite(200,800);
   road_img.addImage(road);
   road_img.scale = 1

   f1_car1 = createSprite(250,750);
   f1_car1.addImage(f1car1);
    f1_car1.scale= 0.8
  
    gameOver=createSprite(400,400)
    gameOver.addImage(gameOverimg)
    gameOver.visible= false

  

  carsGroup= new Group()

}




function draw() {
  background(riveImg);  

  spawncars();
   
  if(keyDown(LEFT_ARROW)){
    f1_car1.velocityX = -5

  }
  else{
    f1_car1.velocityX = 0

  }
   if(keyDown(RIGHT_ARROW)){
     f1_car1.velocityX = 5
   }
   else{
    f1_car1.velocityX = 0

   }
   if (keyDown(UP_ARROW)) {
     f1_car1.velocityY = -5
   }
   if(keyDown(DOWN_ARROW)){
     f1_car1.velocityY = 5
   }
     
    if(f1_car1.x<10){
      carsGroup.destroyEach()
      gameOver.visible=true
      road_img.visible=false
      

    }

    if(f1_car1.x>400){
      carsGroup.destroyEach()
      gameOver.visible=true
      road_img.visible=false
      

    }
    drawSprites();
   




}

function spawncars(){
  if(frameCount%60===0){
   car = createSprite(200,700)
   car.x=Math.round(random(200,600))
   car.velocityY = -5
   car.scale = 0.4
   car.lifetime = 200
   var rand = Math.round(random(1,5))
   switch(rand){
   case 1: car.addImage(f1car1)
    break;
    case 2: car.addImage(f1car2)
     break;
     case 3: car.addImage(f1car3)
      break;
      case 4: car.addImage(f1car4)
      break;
      case 5: car.addImage(f1car5)
       break;
       default:break
       
   }

car.depth=road_img.depth
carsGroup.add(car)



   

   }
  }






