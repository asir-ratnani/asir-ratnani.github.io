// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let sonic;
let scalar;

function preload() {
  sonic = loadImage("assets/SFModernSonicRender.png");

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  scalar = 0.5;
}

function draw() {
  background(255)
  displayImage()

}

function displayImage() {
  image (sonic, mouseX, mouseY, sonic.width * scalar, sonic.height * scalar);

}

function mouseWheel(event) {
  if (event.delta < 0 && scalar < 2.5) {
    scalar *= 1.1;
  }
  else if (event.delta > 0 && scalar > 0.2) {
    scalar *= 0.9;
  }
  console.log(event);
}
