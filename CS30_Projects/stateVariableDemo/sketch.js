// State Variables Rectangle Moving Demo
// Asir
// September 24, 2018
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let state = 1;
let x = 0;
let y = 0;
let speed = 5;
let size = 25;



function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  background(255);
  determineState();
  moveRect();
  rect(x,y,size,size);
  fill(0);
  stroke(0);
}

function determineState() {
  if (state === 1 && x >= width - size) {
    x = width - size;
    state = 2;
  }
  else if (state === 2 && y >= height - size) {
    y = height - size;
    state = 3;
  }
  else if (state === 3 && x <= 0) {
    x = 0;
    state = 4;
  }
  else if (state === 4 && y <= 0) {
    y = 0;
    state = 1;
  }
}

function moveRect() {
  if (state === 1) {
    x += speed;
  }
  else if (state === 2) {
    y += speed;
  }
  else if (state === 3) {
    x -= speed;
  }
  else if (state === 4) {
    y -= speed;
  }
}

// function moveBox() {
//   x += dx;
//   if (x >= windowWidth - size) {
//     x = windowWidth - size;
//     y += dy;
//   }
//   else if (y >= windowHeight - size) {
//     y = windowHeight - size;
//     x -= dx;
//   }
//   // else if (x <= windowWidth + size) {
//   //   x = windowWidth + size;
//   //   y += dy * -1;
//   else if (x <= windowWidth + size){
//     y = windowHeight + size;
//     x -= dx;
//   }
// }
