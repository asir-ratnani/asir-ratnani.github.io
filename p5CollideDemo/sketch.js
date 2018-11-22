// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let hitbox = false;
let x = 75;
let y = 150;
let w = 200;
let h = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  let hitbox = collidePointRect(mouseX, mouseY, x, y, w, h);
  if (hitbox) {
    fill(0,0,255);
  }
  else {
    fill(255,0,255);
  }
  // fill(255,0,0);
  rect(x,y,w,h);
  
  
}
