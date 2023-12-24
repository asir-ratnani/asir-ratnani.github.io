// Air Hockey
// Asir Ratnani & Eimear Currie
// December 5, 2018
//
// Extra for Experts:
// - It is not regular air hockey, it is EXTREMEEEE AIR HOCKEY! Press the mouse to see EXTREME MODE!
// - Used p5.play to incorporate collision detection
//
// To use extreme mode, press the mouse on the screen. 
//
// ERRORS:
// Our amazing EASTER EGG! (jk it's a physics problem that both of us couldn't solve; To be fair though, neither of us have taken Physics 30 yet :))
// Half of paddle and puck go out of boundaries due to sprite radius not correlating with actual radius.
//  
// Asir:
// Collision Detection (using p5.play)
// Created paddles as sprites
// Used Eimear's puck creation to create puck sprite
// Created working (somewhat) boundaries
//
// Eimear:
// Created Puck
// Created Goals using the power of math.
// Added Score
// Added amazing, magnifizent, extreeeme, music
// Added amazing, magnifizent, extreeeme, background + inverted colours to create EXTREME mode.
//
// Our project includes an easter egg: spoiler warning ahead !!!! when the puck loops around the paddle thats the easter egg!! but what is it for? thats for you to figure out ;) - Eimear


// Settings variables for Air Hockey
let backgroundImage, extremeBackgroundImage;
let goalNoise, regularBackgroundSong, puckNoise, extremeBackgroundSong, thunderSound ;
let counter = 0;
let counter2 = 0;
let newPaddle_1, newPaddle_2;
let newPuck;
let objects;
let backdrop;
let backmusic, soundEffect;


function preload(){
  // Loading images and sound for both normal mode and extreme mode
  backgroundImage = loadImage("assets/background.png");
  extremeBackgroundImage = loadImage("assets/extremeBackground.png");
  regularBackgroundSong = loadSound("assets/regularBackground.mp3");
  puckNoise = loadSound("assets/hockeyPuckSound.mp3");
  extremeBackgroundSong = loadSound("assets/extremeBackground.mp3");
  thunderSound = loadSound("assets/thunder.mp3");
  goalNoise = loadSound("assets/goalNoise.mp3");
}

function setup() {
  // Note: WindowHeight must be 939 due to goals and math calculations.
  createCanvas(windowWidth, 939);
  setupCollide();
  // Setting the images and music for normal mode.
  backdrop = backgroundImage;
  soundEffect = puckNoise;
  backmusic = regularBackgroundSong;
  backmusic.play();
  soundEffect.play();
}

function draw() {
  background(backdrop);

  movePaddle_1();
  movePaddle_2();

  setBoundaries();

  //makes the puck bounce off the paddles (p5.play)
  newPuck.bounce(newPaddle_1);
  newPuck.bounce(newPaddle_2);

  //p5.play function
  drawSprites();

  leftGoal();
  rightGoal();
  keepScore();
}

function movePaddle_1() { 
  if (keyIsDown(87)) { //w
    newPaddle_1.position.y -= 8;
  }
  if (keyIsDown(83)) { //s
    newPaddle_1.position.y += 8;
  }

  if (keyIsDown(65) ) { //a
    newPaddle_1.position.x -= 8;
  }
  if (keyIsDown(68)) { //d
    newPaddle_1.position.x += 8;
  }
}
function movePaddle_2() {
  if (keyIsDown(38)) { //up arrow
    newPaddle_2.position.y -= 8;
  }
  if (keyIsDown(40)) { //down arrow
    newPaddle_2.position.y += 8;
  }

  if (keyIsDown(37) ) { //left arrow
    newPaddle_2.position.x -= 7;
  }
  if (keyIsDown(39)) { //right arrow
    newPaddle_2.position.x += 7;
  }
}

function rightGoal(){
  if (newPuck.position.x + 67.5 > width && newPuck.position.y >= 334.5 && newPuck.position.y <=604.5){ //67.5 is paddle radius, 334.5 is point right above goal and 604.5 is point right below goal so it detects if the puck is between those points
    counter2 = counter2 + 1;
    goalNoise.play();
    newPuck.position.x = width/2;
    newPuck.position.y = height/2;
  }
}

function leftGoal(){
  if (newPuck.position.x - 67.5 < 0 && newPuck.position.y >= 334.5 && newPuck.position.y <=604.5){ //67.5 is paddle radius, 334.5 is point right above goal and 604.5 is point right below goal so it detects if the puck is between those points
    counter = counter + 1;
    goalNoise.play();
    newPuck.position.x = width/2;
    newPuck.position.y = height/2;
  }
}

function setupCollide() { //p5.play function!
  objects = new Group();
  // Creating the puck and paddle sprites to use for p5.play
  newPuck = createSprite(width / 2, height/ 2);
  newPuck.addImage(loadImage("assets/puck.png"));

  newPaddle_1 = createSprite (200, height /2);
  newPaddle_1.addImage(loadImage("assets/paddle.png"));

  newPaddle_2 = createSprite (width - 200, height/2);
  newPaddle_2.addImage(loadImage("assets/paddle.png"));
  // To be honest i have no idea how this function works, it sets the colliders for the paddles and puck. Uses these parameters: ('type', offsetX, offsetY, radius)
  newPaddle_1.setCollider('circle', -12.5, 12.5, 67.5);
  newPaddle_2.setCollider('circle' ,-12.5, 12.5, 67.5);
  newPuck.setCollider('circle', -5, 5, 50);

  // Sets the random speed limits for the puck.
  newPuck.setSpeed(10, 10);
  
  // Sets the sizes for the paddles and puck.
  newPaddle_1.scale = 0.75;
  newPaddle_2.scale = 0.75;
  newPuck.scale = 0.65;

  // The scale is = to the mass of the paddles and puck.
  newPaddle_1.mass = newPaddle_1.scale;
  newPaddle_2.mass = newPaddle_2.scale;
  newPuck.mass = newPuck.scale;

  // Setting the paddles as immovable to make sure they don't bounce against the puck.
  newPaddle_1.immovable = true;
  newPaddle_2.immovable = true;

  // Adding all the sprites to the Group "objects"
  objects.add(newPaddle_1);
  objects.add(newPaddle_2);
  objects.add(newPuck);

}
  // Setting the boundaries for the puck and paddles to make sure they don't go past the width and height.
function setBoundaries() {
  for(let i=0; i<allSprites.length; i++) {
    let s = allSprites[i];
    if(s.position.x < 0) {
      s.position.x = 1;
      s.velocity.x = abs(s.velocity.x);
    }
    if(s.position.x> width) {
      s.position.x = width-1;
      s.velocity.x = -abs(s.velocity.x);
    }
    if(s.position.y<0) {
      s.position.y = 1;
      s.velocity.y = abs(s.velocity.y);
    }

    if(s.position.y>height) {
      s.position.y = height-1;
      s.velocity.y = -abs(s.velocity.y);
    }
  }
}

function mousePressed() {
  // If mouse is pressed change to extreme mode
  if (backdrop === backgroundImage){
    backmusic.stop();
    soundEffect.stop();
    backdrop = extremeBackgroundImage;
    backmusic = extremeBackgroundSong;
    soundEffect = thunderSound;
    backmusic.loop();
    soundEffect.loop();
  }
  // Change back to normal mode
  else if (backdrop === extremeBackgroundImage){ 
    backmusic.stop();
    soundEffect.stop();
    backdrop = backgroundImage;
    backmusic = regularBackgroundSong;
    soundEffect = puckNoise;
    soundEffect.loop();
    backmusic.loop();
  }
}

// function to print the scores on the screen
function keepScore(){
  textSize(100);
  fill(255, 0, 0);
  text(counter2, width/2- 150, 125);
  text(counter, width/2 + 150, 125);
}