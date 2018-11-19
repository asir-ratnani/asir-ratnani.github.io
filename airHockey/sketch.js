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
// Make the paddle look nicer
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


let paddle_1 = {
  x: 75,
  y: height/2,
  dx: 10, 
  dy: 10,
  width: 25,
  height: 80,
  color: "red",
};

let paddle_2 = {
  x: width - 75,
  y: height/2,
  dx: 10, 
  dy: 10,
  width: 25,
  height: 80,
  color: "red",
};

let boundary;


// class AirHockeyPaddle {
//   constructor (x,y) {
//     this.x = x;
//     this.y = y;
//     this.dx = 10;
//     this.dy = 10;
//     this.size = 25;
//     this.color = "red"
//   }

//   display () {
//     fill(this.color);
//     rect (this.x, this.y, this.size, this.size);
//     ellipse(this.x, this.y, this.size - 10, this.size -10);

//   }


//   update() {
//     if (keyIsDown(UP_ARROW)){
//       this.y -= this.dy;
//     }
//     

    // if (this.y <=0 + this.size|| this.y >= height - this.size) {
    //   this.dy *= -1;

    // }
    // if (this.x <= 0 + this.size|| this.x >= width - this.size){
    //   this.dx *= -1;
//   }
// }



function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  background(0);
  
}

function paddleMovement() {
  if (paddle_1.x >= 0 && paddle_1.x <= width) {
    if (paddle_1.y <= height && paddle_1.y >= 0) {
      if (keyIsDown(87)) {
        this.y -= this.dy;
      }
      else if (keyIsDown(83)) {
        this.y += this.dy;
      }
      else if (keyIsDown(37)) {
        this.x -= this.dx;
      }
      else if (keyIsDown(39)) {
        this.x += this.dx;
      }
  }
  if (paddle_2.x >= 0 && paddle_2.x <= width) {
    if (paddle_2.y <= height && paddle_2.y >= 0) {
    //move paddle 2
    }
  }
}
}


function createBoundary() {
  // 
  
  
}