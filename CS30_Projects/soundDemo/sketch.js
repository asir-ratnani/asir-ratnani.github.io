// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let backgroundMusic;
let spellSound;

function preload() {
  backgroundMusic = loadSound("assets/Sound1.mp3");
  spellSound = loadSound("assets/Sound2.wav");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  backgroundMusic.setVolume(0.2);
  backgroundMusic.loop();
}

function draw() {

}

function mousePressed() {
  fill(random(255),random(255),random(255),random(255));
  noStroke();
  ellipse(random(width),random(height),50,50);
  spellSound.play();
}
