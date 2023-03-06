// This sketch adds a bird sprite to the canvas.
let  ballSpeed;
function setup() {
  // The following constants don't change, but they are convenient
  // to set as variables because they are used throughout some programs.
  // Set up the canvas.
  createCanvas(400, 400);
//  angleMode(DEGREES); 

BallY=30
ballSpeed=random (1,5)
ballSize=45
avatarSize=100
  ballIsHit=false
  
}

function draw() {
 background("skyblue")
   fill("green")
  rect(0,380,400.20)
 addAvatar (mouseX,200,0.5)
  fill("white")
  addBall(0,0+ballSpeed,1)
ballSpeed+=5  
 
} 

function addAvatar(x,y,size){ 
push()
  translate (x,y)
  scale(size)
  fill(255, 224, 189);
  rect(50, 150, avatarSize);
  fill(153, 51, 0);
  noStroke();
  rect(50, 150, 10, 70);
  rect(50, 150, 100, 10);
  rect(140, 150, 10, 70);
  fill(1000, 1000, 1000);
  rect(70, 180, 20, 20);
  rect(110, 180, 20, 20);
  fill(0, 0, 0);
  rect(80, 190, 10, 10);
  rect(110, 190, 10, 10);
  noFill();

  

  
    fill("red");
   rect(0, 240, 200, 200);
  if (mouseIsPressed){
    fill("purple");
     rect(0, 240, 200, 200);
  }

  
  
pop()
  
}
function addBall(ballX,ballY,size){
  scale(size)
  translate (ballX,ballY)
ellipse (45,30,ballSize)  
   

  
}
