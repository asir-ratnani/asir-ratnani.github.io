// Asir Ratnani
// October 15, 2018
// State Variables Assignment
//
// Extra for Experts:
// - Added a Youtube Video; Opens when '???' is pressed. 
// - Linked 2 projects together; Used index.html to link another .js file



let state = 0;
let color;
let menuWidth, menuHeight;
let menuX, menuY;
let titleScreenFont;
let backgroundMusic;

function preload() {
  titleScreenFont = loadFont("assets/embryonic-world.ttf");
  backgroundMusic = loadSound("assets/Game-Menu_Looping.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  textFont(titleScreenFont);
  textSize(22);
  
  //Pong Setup
  backgroundMusic.loop();
  speed = 7;
  xBall = random(0,width);
  yBall = 5;
  dxBall = speed;
  dyBall = speed;
  //// Set the variables for the paddle
  paddleWidth = 150;
  paddleHeight = 25;
  dxPaddle = 25;
  xPaddle = width / 2 - paddleWidth / 2;
  yPaddle = height - 75;
  //// Setting miscellaneous variables
  colour_1 = random(255);
  colour_2 = random(255);
  colour_3 = random(255);
  counter = 0;


  // Menu Setup
  menuWidth = 300;
  menuHeight = 55;
  menuX = 75;
  menuY = windowHeight / 2;

}

function draw() {
  determineState();

}

function determineState() {
  if (state === 0) {
    backgroundMusic.setVolume(0.5);
    drawMenu1();
    fill(0);
    text("PONG", menuX + 100, menuY - 65);
    text("TIC TAC TOE", menuX + 40, menuY + 40);
    text ("???", menuX + 110, menuY + 135);
  }
  else if (state === 1) {

    setupPong();
    paddle();
    ball();

  }
  else if (state === 2) {
    //run tic tac toe
  }
  else if (state === 3) {
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
    backgroundMusic.setVolume(0.0);
    state = 0;
  }
}


function drawMenu1() {
  fill(0, 182, 255);
  rect(menuX, menuY - 100, menuWidth,menuHeight);
  fill (0, 200, 10);
  rect(menuX, menuY, menuWidth,menuHeight);
  fill (225, 120, 0);
  rect(menuX, menuY + 100, menuWidth,menuHeight);

}

function mousePressed() {
  if (state === 0 && mouseIsPressed) {
    if (mouseX > 75 && mouseX < menuWidth + 75) {
      if (mouseY > menuY && mouseY < menuY + 55) {
        console.log("#2");
        // state = 2;
      }
    
      else if (mouseY > menuY - 100 && mouseY < menuY - 45){
        console.log("#1");
        state = 1;
      }
      else if (mouseY > menuY + 100 && mouseY < menuY + 155) {
        console.log("#3");
        state = 3;

      }
  }
}
}
