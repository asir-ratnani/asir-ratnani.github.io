// Air Hockey
// Asir Ratnani & Eimear Currie
// December 5, 2018
//
// Extra for Experts:
// - It is not regular air hockey, it is EXTREMEEEE LASER AIR HOCKEY!
// - Each time the bullet increases,
//
// Both:
// Collision detector :)
//
// Asir:
// Create boundary :)
// Make the paddle look nicer
// Make sure the paddle doesnt fly off screen
// Add another paddle;
// Menu
//
// Eimear:
// Create Puck :)
// Make sure the puck bounces off edges. :)
// Menu
// SFX
// Find amazing, awsome, great background image.
// Find amazing, awsome, great music
//
//

let paddle_1;
let paddle_2;
let puck;
let hit1;
let hit2;
let backgroundImage, goalNoise, extremeBackgroundImage, regularBackgroundSong, puckNoise, extremeBackgroundSong, thunderSound ;
let gotGoal;
let gotGoal2;
let goal;
let counter = 0;
let counter2 = 0;
let state = 1;

let newPaddle_1, newPaddle_2;
let newPuck;
let objects;
let backdrop;
let backmusic;


function preload(){
  backgroundImage = loadImage("assets/background.png");
  extremeBackgroundImage = loadImage("assets/extremeBackground.png");
  regularBackgroundSong = loadSound("assets/regularBackground.mp3");
  puckNoise = loadSound("assets/hockeyPuckSound.mp3");
  extremeBackgroundSong = loadSound("assets/extremeBackground.mp3");
  thunderSound = loadSound("assets/thunder.mp3");
  goalNoise = loadSound("assets/goalNoise.mp3");
}



function setup() {
  puckNoise.loop();
  createCanvas(windowWidth, windowHeight);
  setupCollide();
  backdrop = backgroundImage;
  backmusic = regularBackgroundSong;
  backmusic.play();
}

function draw() {
  background(backdrop);
    
  movePaddle_1();
  movePaddle_2();

  setBoundaries();

  newPuck.bounce(newPaddle_1);
  newPuck.bounce(newPaddle_2);

  drawSprites();
  leftGoal();
  rightGoal();
  keepScore();


}



function movePaddle_1() {
    if (keyIsDown(87)) {
        newPaddle_1.position.y -= 8;
        }
        if (keyIsDown(83)) {
        newPaddle_1.position.y += 8;
        }

        if (keyIsDown(65) ) {
        newPaddle_1.position.x -= 8;
        }
        if (keyIsDown(68)) {
        newPaddle_1.position.x += 8;
        }
    }
function movePaddle_2() {
    if (keyIsDown(38)) {
        newPaddle_2.position.y -= 8;
      }
    if (keyIsDown(40)) {
        newPaddle_2.position.y += 8;
      }
    
    if (keyIsDown(37) ) {
        newPaddle_2.position.x -= 7;
      }
    if (keyIsDown(39)) {
        newPaddle_2.position.x += 7;
      }
    }

function rightGoal(){
  if (newPuck.position.x + 67.5 > width && newPuck.position.y >= 334.5 && newPuck.position.y <=604.5){ //67.5 is paddle radius, 334.5 is point right above goal and 604.5 is point right below goal
    counter2 = counter2 + 1;
    goalNoise.play();
    newPuck.position.x = width/2;
    newPuck.position.y = height/2;
  }
}

function leftGoal(){
  if (newPuck.position.x - 67.5 < 0 && newPuck.position.y >= 334.5 && newPuck.position.y <=604.5){
    counter = counter + 1;
    goalNoise.play();
    newPuck.position.x = width/2;
    newPuck.position.y = height/2;
  }
}

function setupCollide() {
  objects = new Group();

  newPuck = createSprite(width / 2, height/ 2);
  newPuck.addImage(loadImage("assets/puck.png"));

  newPaddle_1 = createSprite (200, height /2);
  newPaddle_1.addImage(loadImage("assets/paddle.png"));
  
  newPaddle_2 = createSprite (width - 200, height/2);
  newPaddle_2.addImage(loadImage("assets/paddle.png"));

  newPaddle_1.setCollider('circle', -12.5, 12.5, 67.5);
  newPaddle_2.setCollider('circle' ,-12.5, 12.5, 67.5);
  newPuck.setCollider('circle', -5, 5, 35);


  newPuck.setSpeed(10, 10);

  newPaddle_1.scale = 0.75;
  newPaddle_2.scale = 0.75;
  newPuck.scale = 0.65;

  newPaddle_1.mass = newPaddle_1.scale;
  newPaddle_2.mass = newPaddle_2.scale;
  newPuck.mass = newPuck.scale;

  newPaddle_1.immovable = true;
  newPaddle_2.immovable = true;

  
  objects.add(newPaddle_1);
  objects.add(newPaddle_2);
  objects.add(newPuck);
}

function setBoundaries() {
  for(let i=0; i<allSprites.length; i++) {
    let s = allSprites[i];
    if(s.position.x < 0) {
      s.position.x = 1;
      s.velocity.x = abs(s.velocity.x);
    }
    if (i === 0) {
      if(s.position.x> width) {
        s.position.x = width-1;
        s.velocity.x = -abs(s.velocity.x);
      }
    }
    else if (i === 1) {
      if(s.position.x> width / 2) {
        s.position.x = (width/2)-1;
        s.velocity.x = -abs(s.velocity.x);
      }
    }
    else if (i === 2) {
      if(s.position.x < width/2) {
        s.position.x = (width/2) + 1;
        s.velocity.x = -abs(s.velocity.x);
    }
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
  if (backdrop === backgroundImage){
    backmusic.stop();
    backdrop = extremeBackgroundImage;
    backmusic = extremeBackgroundSong;
    backmusic.loop();
    thunderSound.loop();



  }
  else if (backdrop === extremeBackgroundImage){ //music switches
    backmusic.stop();
    backdrop = backgroundImage;
    backmusic = regularBackgroundSong;
    backmusic.loop();

  }

 }

function keepScore(){
  textSize(100);
  fill(255, 0, 0);
  text(counter, width/2- 150, 125);
  text(counter2, width/2 + 150, 125);
}


// function mousePressed() {
//     background(0);
//     loop();
//     // insert music
// }