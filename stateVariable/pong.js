let xBall, yBall;
let dxBall, dyBall;
let xPaddle, yPaddle;
let paddleWidth, paddleHeight;
let dxPaddle;
let colour_1, colour_2, colour_3;
let counter;
let button_1;
let speed;

function setupPong() {
  background(0);
  //Displays all the text on the screen.
  textSize(20);
  text("Score", 50, 100);
  fill(0,255,0);
  text(counter, 50, 125);
  textSize(32);
  text("Single Player Pong!", windowWidth / 2 - 100, 100);
  textSize(20);
  text("By: Asir Ratnani", windowWidth / 2 - 45, 125);
}

function ball() {
  //Draws the ball
  noStroke();
  fill (colour_1, colour_2, colour_3);
  ellipse(xBall, yBall, 25, 25);
  // Moves the ball and bounces it off the walls
  xBall += dxBall;
  yBall += dyBall;
  if (xBall >= windowWidth || xBall <= 0) {
    dxBall = dxBall *= -1;
  }
  if (yBall <= 0) {
    dyBall = dyBall *= -1;
  }
  //Game Over screen prompt
  if (yBall >= windowHeight) {
    xBall = 0;
    yBall = 0;
    text("GAME OVER", windowWidth / 2 - 30, windowHeight / 2);
    resetButtonCall();
    noLoop();
  }
  // Detects collision between the paddle and the ball.
  if ((xBall >= xPaddle && xBall <= xPaddle + paddleWidth) && (yBall + 12.5 >= yPaddle)) {
    dxBall *= -1;
    dyBall *= -1;
    colour_1 = random(255);
    colour_2 = random(255);
    colour_3 = random(255);
    counter += 1;
    dxBall += 1;
    dyBall += 1;
  }
}


function paddle() {
// Draws the paddle
  noStroke();
  fill(225,0,0);
  rect(xPaddle, yPaddle, paddleWidth, paddleHeight);
}

function keyPressed() {
  //Moves the paddle side to side using the keyboard
  if (keyCode === LEFT_ARROW) {
    xPaddle -= 50;
  }
  if (keyCode === RIGHT_ARROW) {
    xPaddle += 50;
  }
}

function resetButtonCall() {
  // Enacts the reset game button
  button_1 = createButton("Restart Game");
  button_1.mousePressed(resetGame);
  button_1.position(windowWidth / 2 - 15, windowHeight / 2 + 25);

}

function resetGame() {
  //Defines what will happen once you press the button.
  counter = 0;
  xPaddle = width / 2 - paddleWidth / 2;
  yPaddle = height - 75;
  draw();
  loop();
  button_1.hide();

}
