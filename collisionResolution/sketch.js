// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let paddle;
let ball;
let objects;


function setup() {
  createCanvas(windowWidth, windowHeight);

  
  
}

function draw() {
  background(220);
  if (keyIsDown(87)) {
    paddle.position.y -= 5;
  }
  if (keyIsDown(83)) {
    paddle.position.y += 5;
  }

  if (keyIsDown(65) ) {
    paddle.position.x -= 5;
  }
  if (keyIsDown(68)) {
    paddle.position.x += 5;
  }

  ball.bounce(paddle);

  for(var i=0; i<allSprites.length; i++) {
    var s = allSprites[i];
    if(s.position.x<0) {
      s.position.x = 1;
      s.velocity.x = abs(s.velocity.x);
    }

    if(s.position.x>width) {
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

  drawSprites();

}

