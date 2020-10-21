function setup() {
  createCanvas(800,400);
 fixedRect= createSprite(200, 100, 50, 50);
 fixedRect.velocityY=-3;

 movingRect=createSprite(200,300,50,30);
 movingRect.velocityY=3;
 movingRect.shapeColor="green";
 fixedRect.shapeColor="green";

}

function draw() {
  background(0);  
 
  if(fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2 &&
     movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 ){
    movingRect.velocityX=movingRect.velocityX*(-1);
    fixedRect.velocityX=fixedRect.velocityX*(-1);
     }
     if(fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2 &&
      movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2){
        movingRect.velocityY=movingRect.velocityY*(-1);
        fixedRect.velocityY=fixedRect.velocityY*(-1);
      

  }
  
  
  drawSprites();
}