// Asir Ratnani
// October 15, 2018
// State Variables Assignment
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let state = 0;
let color;
let menuWidth, menuHeight;
let menuX, menuY;
let titleScreenFont

function preload() {
  titleScreenFont = loadFont("assets/embryonic-world.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  textFont(titleScreenFont);
  textSize(22);
  
  menuWidth = 300;
  menuHeight = 55;
  menuX = 75;
  menuY = windowHeight / 2


}

function draw() {
  determineState()

}

function determineState() {
  if (state === 0) {
    drawMenu1();
    fill(0);
    text("PONG", 170, 330);
    text("TIC TAC TOE", 120, 430);
    text ("RANDOM", 150, 530)
  }
  else if (state === 1) {
    //run pong
  }
  else if (state === 2) {
    //run tic tac toe
  }
}


function drawMenu1() {
  fill(0, 182, 255);
  rect(menuX, menuY - 100, menuWidth,menuHeight);
  fill (0, 200, 10)
  rect(menuX, menuY, menuWidth,menuHeight);
  fill (225, 120, 0)
  rect(menuX, menuY + 100, menuWidth,menuHeight);

}

function mousePressed() {
  if (state === 0) {
    if (mouseX > 75 && mouseX < menuWidth + 75) {
      if ((mouseY > menuY && mouseY < menuY + 55) && (mouseIsPressed)) {
        console.log("#2");
        state = 1;
      }
    
      else if ((mouseY > menuY - 100 && mouseY < menuY - 45) && (mouseIsPressed)){
        console.log("#1");
        state = 2;
      }
      else if ((mouseY > menuY + 100 && mouseY < menuY + 155) && (mouseIsPressed)) {
        console.log("#3");
        state = 3;

      }
  }
}
}
