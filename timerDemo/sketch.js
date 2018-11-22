// Timer Class Demo
// Asir Ratnani
// November 21, 2018
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

class Timer {
  constructor(timeToWait) {
    this.startTime = millis();
    this.waitTime = timeToWait;
  }

  isDone(){
    if ( millis() >= this.startTime + this.waitTime) {
      return true;
    }
    else {
      return false;
    }
  }
  reset(timeToWait) {
    this.startTime = millis();
    this.waitTime = timeToWait;

  }
}

let backgroundTimer;

function setup() {
  createCanvas(windowWidth, windowHeight);
  backgroundTimer = new Timer (2500);
}

function draw() {
  background(220);
  if (backgroundTimer.isDone()) {
    background(0,255,0)
  }
  else {
    background(255,0,0)
  }
}

function mousePressed() {
  backgroundTimer.reset(1000);
}