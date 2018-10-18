// State Variables Assignment
// Asir Ratnani
// October 15, 2018
//
// Extra for Experts:
// Use of an AI bot to compete against in Pong.
// 
// Credits:
// SPECIAL SHOUTOUT TO TRAVIS AHERN FOR HELPING ME SET-UP THE AI BOT!!
//
// Music by Eric Matyas
// www.soundimage.org
//


//List of variables used in this game
let xBall, yBall;
let dxBall, dyBall;

let xPaddle_1, yPaddle_1;
let xPaddle_2, yPaddle_2;

let paddleWidth, paddleHeight;
let dxPaddle;
let direction;

let colour_1, colour_2, colour_3;
let counter_1, counter_2;
let backgroundMusic;
let button_1;
let speed;

function preload() {
  backgroundMusic = loadSound("assets/Game-Menu_Looping.mp3");
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  resetButtonCall();
  backgroundMusic.loop();
  //  Set the variables for the ball
  speed = 5;
  xBall = width / 2;
  yBall = 5;
  dxBall = random(direction) * speed;
  dyBall = random(direction) * speed;
  direction = [-1, 1];

  // Set the variables for the paddle
  paddleWidth = 25;
  paddleHeight = 100;
  dxPaddle = 25;
  xPaddle_1 = 75;
  yPaddle_1 = height / 2;
  xPaddle_2 = width - 75;
  yPaddle_2 = height / 2; 

  // Setting miscellaneous variables
  colour_1 = random(255);
  colour_2 = random(255);
  colour_3 = random(255);
  counter_1 = 0;
  counter_2 = 0;
}

function draw() {
  background(0);
  //Displays all the text on the screen.
  textSize(20);
  fill(225,50,50);
  text("P1 Score", 50, 100);
  fill(0,255,0);
  text(counter_1, 50, 125);

  textSize(20);
  fill(66,244,244);
  text("P2 Score", width - 100, 100);
  fill(0,255,0);
  text(counter_2, width - 50, 125);
  
  textSize(32);
  text("Player VS Computer Pong!", windowWidth / 2 - 100, 100);
  textSize(20);
  text("By: Asir Ratnani", windowWidth / 2, 125);
  // Calls the functions in order to draw and move the paddle and ball.
 
  paddle_1();
  paddle_2();
  ball();
  paddleMove();


}


function ball() {
  //Draws the ball
  noStroke();
  fill (colour_1, colour_2, colour_3);
  ellipse(xBall, yBall, 25, 25);
  // Moves the ball and bounces it off the walls
  xBall += dxBall;
  yBall += dyBall;

  if (yBall <= 0 || yBall >= height) {
    dyBall = dyBall *= -1;
  }

  if (xBall >= width) {
    resetBall();
    counter_1++;
  }
  else if (xBall <= 0) {
    resetBall();
    counter_2++;
  
  }
  // //Game Over screen prompt
  // if (xBall <= 0) {
  //   xBall = 0;
  //   yBall = 0;
  //   text("GAME OVER", windowWidth / 2 - 30, windowHeight / 2);
  //   resetButtonCall();
  //   noLoop();
  // }

  // Detects collision between the user paddle and the ball.
  if (xBall + 12.5 >= xPaddle_1 && xBall <= xPaddle_1 + paddleWidth && xBall - 12.5 >= xPaddle_1) {
    if (yBall - 12.5 <= yPaddle_1 + paddleHeight && yBall + 12.5 >= yPaddle_1){
      dxBall *= -1;
      dyBall *= -1;
      colour_1 = random(255);
      colour_2 = random(255);
      colour_3 = random(255);
      dxBall += 1;
      dyBall += 1;
    }
  }
  // Detects collision between the AI paddle and the ball.
  if (xBall + 12.5 >= xPaddle_2 && xBall <= xPaddle_2 + paddleWidth && xBall - 12.5 >= xPaddle_2) {
    if (yBall - 12.5 <= yPaddle_2 + paddleHeight && yBall + 12.5 >= yPaddle_2){
      dxBall *= -1;
      dyBall *= -1;
      colour_1 = random(255);
      colour_2 = random(255);
      colour_3 = random(255);
      dxBall -= 1;
      dyBall += 1;
    }
  }
}

function paddle_1() {
// Draws the paddle for user
  noStroke();
  fill(225,0,0);
  rect(xPaddle_1, yPaddle_1, paddleWidth, paddleHeight);
}

function paddle_2() {
  noStroke();
  fill(0,0,225);
  rect(xPaddle_2, yPaddle_2, paddleWidth, paddleHeight);
  if (yPaddle_2 + 50 > yBall) {
    yPaddle_2 -= 7;
  }
  if (yPaddle_2 + 50 < yBall) {
    yPaddle_2 += 4;
  }
}


function resetButtonCall() {
  // Enacts the reset game button
  button_1 = createButton("Restart Game");
  button_1.mousePressed(resetGame);
  button_1.position( windowWidth / 2, 150);

}

function resetBall() {
  speed = 5;
  xBall = width / 2;
  yBall = height / 2;
  dxBall = random(direction) * speed;
  dyBall = random(direction) * speed;
}

function resetGame() {
  //Defines what will happen once you press the "Reset Game" button.
  counter_1 = 0;
  counter_2 = 0;
  xPaddle_1 = 75;
  yPaddle_1 = height / 2;
  xPaddle_2 = width - 75;
  yPaddle_2 = height / 2; 
  resetBall();
  draw();
}
function paddleMove () {
  //Sets up/down arrow to paddles. 
  if (keyIsPressed){
    if (keyIsDown(38)) {
      yPaddle_1 -= 7;
    }
    if (keyIsDown(40)) {
      yPaddle_1 += 7;
    }

  }
}
