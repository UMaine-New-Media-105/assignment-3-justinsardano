let startY = -55;
let ballSpeed;
let ballY=startY;
let ballSize=45;
let ballX;
let avatarSize=100;
let ballIsMoving = false;
let direction = "down";
let canvasSize = 400;

function setup() {
  createCanvas(canvasSize, canvasSize);
  angleMode(DEGREES);
  ballSpeed = random(3,7);
  ballX = random(canvasSize);
}

function draw() {
  push();
  background("skyblue");
  fill("green");
  rect(0, 380, canvasSize);
  addAvatar(mouseX, 200, 0.5);
  fill("white");
  addBall(ballX, ballY, 1);
  if (ballIsMoving == true) {
    ballY += ballSpeed;
    if (ballY > canvasSize + ballSize) {
      ballY = startY;
      ballX = random(canvasSize);
      ballIsMoving = false;
    }
  }
  pop();
}

function addAvatar(x, y, size) {
  push();
  translate(x, y);
  scale(size);
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

  pop();
}
function addBall(ballX, ballY, size) {
  translate(ballX, ballY);
  scale(size);
  ellipse(45, 30, ballSize);
}
function mousePressed() {
  ballIsMoving = true;
}
