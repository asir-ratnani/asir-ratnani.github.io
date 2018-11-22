// Air Hockey
// Asir Ratnani & Eimear Currie
// November 16 2018
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
  paddle_1 = {
    x: 110,
    y: height/2,
    dx: 10, 
    dy: 10,
    radius1: 75,
    radius2: 30,
  };

  paddle_2 = {
    x: width - 110,
    y: height/2,
    dx: 10, 
    dy: 10,
    radius1: 75,
    radius2: 30,
  };
}

function draw() {
  background(0);
  createBoundary();

  drawPaddle();

  movePaddle_1();
  movePaddle_2();


  
}

function paddleMovement() {
  // if (paddle_1.x >= 0 && paddle_1.x <= width) {
  //   if (paddle_1.y <= height && paddle_1.y >= 0) {
  //     if (keyIsDown(87)) {
  //       paddle_1.y -= paddle_1.dy;
  //     }
  //     else if (keyIsDown(83)) {
  //       paddle_1.y += paddle_1.dy;
  //     }
  //     else if (keyIsDown(37)) {
  //       paddle_1.x -= paddle_1.dx;
  //     }
  //     else if (keyIsDown(39)) {
  //       paddle_1.x += paddle_1.dx;
  //     }
  // }
  // else if (paddle_2.x >= 0 && paddle_2.x <= width) {
  //   if (paddle_2.y <= height && paddle_2.y >= 0) {
  //     if (keyIsDown(UP_ARROW)) {
  //       paddle_2.y -= paddle_2.dy;
  //     }
  //     else if (keyIsDown(DOWN_ARROW)) {
  //       paddle_2.y += paddle_2.dy;
  //     }
  //     else if (keyIsDown(LEFT_ARROW)) {
  //       paddle_2.x -= paddle_2.dx;
  //     }
  //     else if (keyIsDown(RIGHT_ARROW)) {
  //       paddle_2.x += paddle_2.dx;
  //     }
    //move paddle 2
      
//     }
//   }
// }
}


function movePaddle_1() {
  if (keyIsDown(87) && paddle_1.y - paddle_1.radius1 >= 0 ) {
    paddle_1.y -= paddle_1.dy;
  }
  if (keyIsDown(83) && paddle_1.y + paddle_1.radius1 <= height) {
    paddle_1.y += paddle_1.dy;
  }
  
  if (keyIsDown(65) && paddle_1.x - paddle_1.radius1 >= 0) {
    paddle_1.x -= paddle_1.dx;
  }
  if (keyIsDown(68) && paddle_1.x + paddle_1.radius1 <= width/2) {
    paddle_1.x += paddle_1.dx;
  }
}

function movePaddle_2() {
  if (keyIsDown(38) && paddle_2.y - paddle_2.radius1 >= 0) {
      paddle_2.y -= paddle_2.dy;
    }
  if (keyIsDown(40) && paddle_2.y + paddle_2.radius1 <= height) {
    paddle_2.y += paddle_2.dy;
  }
  if (keyIsDown(37)  && paddle_2.x - paddle_2.radius1 >= width/2) {
    paddle_2.x -= paddle_2.dx;
  }
  if (keyIsDown(39) && paddle_2.x + paddle_2.radius1 <= width) {
    paddle_2.x += paddle_2.dx;
  }
}


function drawPaddle() {
  fill(255,0,0);
  ellipse(paddle_1.x, paddle_1.y, paddle_1.radius1 *2, paddle_1.radius1 *2);
  fill(255);
  ellipse(paddle_1.x, paddle_1.y, paddle_1.radius2 *2, paddle_1.radius2 *2);
  fill(255,0,0);
  ellipse(paddle_2.x, paddle_2.y, paddle_2.radius1 *2, paddle_2.radius1 *2);
  fill(255);
  ellipse(paddle_2.x, paddle_2.y, paddle_2.radius2 *2, paddle_2.radius2 *2);

}

function createBoundary() {
  fill(0,220,0);
  rect(width/2, 0, 25, height);
}
