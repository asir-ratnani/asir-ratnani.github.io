// Air Hockey
// Asir Ratnani & Eimear Currie
// November 16 2018
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
//
// Both:
// Collision detector
//
// Asir:
// Create boundary 
// Make the puck look nicer
// Make sure the paddle doesnt fly off screen
// Add another paddle;
// Menu
// 
// Eimear:
// Create Puck
// Make sure the puck bounces off edges.
// Menu
// SFX
// Find amazing, awsome, great background image.
// Find amazing, awsome, great music



class AirHockeyPaddle {
  constructor (x,y) {
    this.x = x;
    this.y = y;
    this.dx = 10
    this.dy = 10
    this.size = 25;
    this.color = "red";
  }

  display () {
    fill(this.color);
    rect (this.x, this.y, this.size, this.size);
    ellipse(this.x, this.y, this.size - 10, this.size -10);

  }


  update() {
    if (keyIsDown(UP_ARROW)){
      this.y -= this.dy;
    }
    else if (keyIsDown(DOWN_ARROW)) {
      this.y += this.dy;
    }
    else if (keyIsDown(LEFT_ARROW)) {
      this.x -= this.dx;
    }
    else if (keyIsDown(RIGHT_ARROW)) {
      this.x += this.dx;
    }

    // if (this.y <=0 + this.size|| this.y >= height - this.size) {
    //   this.dy *= -1;

    // }
    // if (this.x <= 0 + this.size|| this.x >= width - this.size){
    //   this.dx *= -1;
  }
}

let stick;

function setup() {
  createCanvas(windowWidth, windowHeight);
  stick = new AirHockeyPaddle(width -100, height/2);
}

function draw() {
  background(0);
  
  stick.display();
  stick.update();
}
