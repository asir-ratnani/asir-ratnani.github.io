// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x, y;
let dx, dy;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0)
}

function draw() {
  drawRect();
  drawEllipse();

}

function drawRect() {
  fill(200,0,0);
  rect (windowWidth/4,windowHeight/2,150, 25);
}

function drawEllipse() {
  fill(0,175,0);
  ellipse (10,10,10,10);

ellipse(windowWidth / 2,windowHeight / 2,50);

}
