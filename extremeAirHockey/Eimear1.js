// Air Hockey
// Asir Ratnani & Eimear Currie
// November 16 2018
//
// Extra for Experts:
// - It is not regular air hockey, it is EXTREMEEEE LASER AIR HOCKEY!
// - Each time the bullet increases,
//
// Both:
// Collision detector :)
//
// Asir:
// Create boundary :)
// Make the paddle look nicer
// Make sure the paddle doesnt fly off screen
// Add another paddle;
// Menu
//
// Eimear:
// Create Puck :)
// Make sure the puck bounces off edges. :)
// Menu
// SFX
// Find amazing, awsome, great background image.
// Find amazing, awsome, great music
//
//


class Laser {
  constructor(x, y, dx, dy, theImage) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = 5;
    this.offScreen = false;
    this.imageToDisplay = theImage;
  }

  update() {
    this.x += this.dx;
    this.y += this.dy;
    if (this.x >= width + this.radius || this.x <= 0 - this.radius || this.y >= height + this.radius || this.y <= 0 - this.radius) {
      this.offScreen = true;
    }
  }
}

let paddle_1;
let paddle_2;
let puck;
let hit_1 = false;
let hit_2 = false;
let collisonNow_1 = false;
let collisionNow_2 = false;

let backgroundImage;
let gotGoal;
let gotGoal2;
let goal;
let counter =0;
let counter2 = 0;
let boundary;
let font;

function preload(){
  backgroundImage = loadImage("assets/background.png");
  font = loadFont("assets/FNL_DEMO-KCFONTS.ttf");
}



function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(font);
  textSize(40);
  textAlign(CENTER, CENTER);

  paddle_1 = {
    x: 110,
    y: height/2,
    dx: 10,
    dy: 10,
    radius1: 75,
    radius2: 30,
  };

  paddle_2 = {
    x: width - 110,
    y: height/2,
    dx: 10,
    dy: 10,
    radius1: 75,
    radius2: 30,
  };
  puck = {
    x : width/2,
    y:height/2,
    dx: random(-1, 1),
    dy : random(-1, 1),
    radius : 50,
  };
  goal = {
    x1: width - 25,
    x2: 0,
    y:height/2 -25,
    w:25,
    h: 250,
  };
}

function draw() {
  background(backgroundImage);
  createBoundary();

  drawPaddle();

  movePaddle_1();
  movePaddle_2();

  displayPuck();
  movePuck();
  rightGoal();
  leftGoal();
  
  collideWithPaddleOne();
  collideWithPaddleTwo();
  textFont(font);
  text(counter, width/2, height/2);
}

function collideWithPaddleOne(){

  // hit_1 = collideCircleCircle(paddle_1.x, paddle_1.y, paddle_1.radius*2, puck.x, puck.y, puck.radius*2);
  //
  // if (hit_1){
  //   puck.dx += paddle_1.dx;
  //   puck.dy += paddle_1.dy;
  //   hit_1 = false;
  // }

  if(dist(puck.x, puck.y, paddle_1.x, paddle_1.y) <= puck.radius + paddle_1.radius1){
    collisionNow_2 = true;

    if(collisionNow_2){
      puck.dx += paddle_1.dx;
      puck.dy += paddle_1.dy;
  }
  }
}
function collideWithPaddleTwo(){

  //hit_2 = collideCircleCircle(paddle_2.x, paddle_2.y, paddle_2.radius1*2, puck.x, puck.y, puck.radius *2);

  // if(hit_2){
  //   puck.dx += paddle_2.dx;
  //   puck.dy += paddle_2.dy;
  //   hit_2 = false;
  // }
  if(dist(puck.x, puck.y, paddle_2.x, paddle_2.y) <= puck.radius + paddle_2.radius1){
    collisionNow_1 = true;

    if(collisionNow_1){
      puck.dx += paddle_2.dx;
      puck.dy += paddle_2.dy;
  }
}
}

function rightGoal(){
  noStroke();
  fill(255);
  rect(goal.x1, goal.y, goal.w, goal.h);

  gotGoal = collideRectCircle(goal.x1,  goal.y, goal.w, goal.h, puck.x, puck.y, puck.radius*2 );

  if(gotGoal){
    counter = counter +1;
    puck.x = width/2;
    puck.y = height/2;
  }
}


function movePaddle_1() {
  if (keyIsDown(87) && paddle_1.y - paddle_1.radius1 >= 0 ) {
    paddle_1.y -= paddle_1.dy;
  }
  if (keyIsDown(83) && paddle_1.y + paddle_1.radius1 <= height) {
    paddle_1.y += paddle_1.dy;
  }

  if (keyIsDown(65) && paddle_1.x - paddle_1.radius1 >= 0) {
    paddle_1.x -= paddle_1.dx;
  }
  if (keyIsDown(68) && paddle_1.x + paddle_1.radius1 <= width/2) {
    paddle_1.x += paddle_1.dx;
  }
}

function movePaddle_2() {
  if (keyIsDown(38) && paddle_2.y - paddle_2.radius1 >= 0) {
      paddle_2.y -= paddle_2.dy;
    }
  if (keyIsDown(40) && paddle_2.y + paddle_2.radius1 <= height) {
    paddle_2.y += paddle_2.dy;
  }
  if (keyIsDown(37)  && paddle_2.x - paddle_2.radius1 >= width/2) {
    paddle_2.x -= paddle_2.dx;
  }
  if (keyIsDown(39) && paddle_2.x + paddle_2.radius1 <= width) {
    paddle_2.x += paddle_2.dx;
  }
}


function drawPaddle() {
  fill(255,0,0);
  stroke(0);
  strokeWeight(5)
  ellipse(paddle_1.x, paddle_1.y, paddle_1.radius1 *2, paddle_1.radius1 *2);
  ellipse(paddle_1.x, paddle_1.y, paddle_1.radius2 *2, paddle_1.radius2 *2);
  ellipse(paddle_2.x, paddle_2.y, paddle_2.radius1 *2, paddle_2.radius1 *2);
  ellipse(paddle_2.x, paddle_2.y, paddle_2.radius2 *2, paddle_2.radius2 *2);

}

function createBoundary() {
//
}

function displayPuck(){
  fill(0);
  ellipse(puck.x, puck.y, puck.radius*2, puck.radius*2);
}

function movePuck(){
  puck.x += puck.dx;
  puck.y += puck.dy;

  //boundary

  if (puck.y <= 0 + puck.radius || puck.y >= height - puck.radius){
    puck.dy *= -1;
  }
  if (puck.x <= 0 + puck.radius|| puck.x >= width - puck.radius){
    puck.dx *= -1;
  }
}

function collideWithPaddleOne(){

  hit = collideCircleCircle(paddle_1.x, paddle_1.y, paddle_1.radius*2, puck.x, puck.y, puck.radius);

  if (hit){
    puck.dx += paddle_1.dx;
    puck.dy += paddle_1.dy;
  }
}

function rightGoal(){
  noStroke();
  fill(255);
  rect(goal.x1, goal.y, goal.w, goal.h);

  gotGoal = collideRectCircle(goal.x1,  goal.y, goal.w, goal.h, puck.x, puck.y, puck.radius*2 );

  if(gotGoal){
    counter = counter +1;
    puck.x = width/2;
  }
}

function leftGoal(){
  noStroke();
  fill(255);
  rect(goal.x2, goal.y, goal.w, goal.h);

  gotGoal2 = collideRectCircle(goal.x2,  goal.y, goal.w, goal.h, puck.x, puck.y, puck.radius*2 );

  if(gotGoal2){
    counter2 = counter2 +1;
    puck.x = width/2;
  }


}
