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



function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
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
    if (mouseX > 75 && mouseX < menuWidth) {
      if ((mouseY > menuY && mouseY < menuY + 55) && (mousePressed()) {
        console.log("I DID IT :))))))");
      }
      else if ()
    }
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

function mouseClicked() {

}