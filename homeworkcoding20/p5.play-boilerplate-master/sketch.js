var backG,issImg,iss,spacecraft,docking
var hasDocked=false



function preload(){
  issImg=loadImage("iss.png")
  backG=loadImage("spacebg.jpg")
  s1=loadImage("spacecraft1.png")
  s3=loadImage("spacecraft3.png")
  s2=loadImage("spacecraft2.png")
  s4=loadImage("spacecraft4.png")
}




function setup() {
createCanvas(800,400);
  iss=createSprite(400, 150, 50, 50);
  iss.addImage(issImg)
  spacecraft=createSprite(50,350,50,50)
  spacecraft.addImage(s1)
  spacecraft.scale=0.2
  spacecraft.x=Math.round(random(50,750))
  docking=createSprite(335,185,30,20)
}

function draw() {
  background(backG); 
  docking.visible=false
  if(!hasDocked){
  
  if(keyCode===UP_ARROW){
    spacecraft.y=spacecraft.y-5
    spacecraft.addImage(s2)
  }
  if(keyCode===DOWN_ARROW){
   
    spacecraft.addImage(s2)
  }
  if(keyCode===LEFT_ARROW){
    spacecraft.x-=5
    spacecraft.addImage(s3)
  }
  if(keyCode===RIGHT_ARROW){
    spacecraft.x+=5
    spacecraft.addImage(s4)
  }

}
if(spacecraft.isTouching(docking)){
 hasDocked=true 
}

  
  drawSprites(); 
   if(hasDocked){
    fill ("white")
    textSize(24)
    text ("Docking Successful !",230,350)
  }
  
}