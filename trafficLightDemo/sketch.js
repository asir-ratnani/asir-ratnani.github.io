// Traffic Light Starter Code
// Dan Schellenberg
// Sept 25, 2018

// GOAL: make a 'traffic light' simulator. For now, just have the light
// changing according to time. You may want to investigate the millis()
// function at https://p5js.org/reference/



const RED_LIGHT_DURATION = 1500;
const GREEN_LIGHT_DURATION = 2000;
const YELLOW_LIGHT_DURATION = 250 ;

let lastTimeSwitchedColour;
let state;

function setup() {
  createCanvas(600, 600);
  state = 1;
  lastTimeSwitchedColour = 0;
}

function draw() {
  background(255);
  drawOutlineOfLights();
  checkForStateChange();
  displayCorrectLight();
}

function checkForStateChange(){
  let elapsedTime = millis() - lastTimeSwitchedColour;

  if (state === 1 && elapsedTime >= RED_LIGHT_DURATION) {
    state = 2;
    lastTimeSwitchedColour = millis();
  }
  else if (state === 2 && elapsedTime >= GREEN_LIGHT_DURATION) {
    state = 3;
    lastTimeSwitchedColour = millis();
  }
  else if (state === 3 && elapsedTime >= YELLOW_LIGHT_DURATION) {
    state = 1;
    lastTimeSwitchedColour = millis();
  }
}
function displayCorrectLight() {
  if (state === 1) {
    displayRedLight();
  }
  else if (state === 2) {
    displayGreenLight();
  }
  else if (state === 3) {
    displayYellowLight();
  }
}
function drawOutlineOfLights() {
  //box
  rectMode(CENTER);
  fill(0);
  rect(width/2, height/2, 75, 200, 10);

  fill(255);
  ellipse(width/2, height/2 - 65, 50, 50); //top
  ellipse(width/2, height/2, 50, 50); //middle
  ellipse(width/2, height/2 + 65, 50, 50); //bottom

}

function displayRedLight() {
  fill(255,0,0);
  ellipse(width/2, height/2 - 65, 50, 50); //top
}

function displayYellowLight() {
  fill(255,255,0);
  ellipse(width/2, height/2, 50, 50); //middle
}

function displayGreenLight() {
  fill(0,255,0);
  ellipse(width/2, height/2 + 65, 50, 50); //bottom
}
