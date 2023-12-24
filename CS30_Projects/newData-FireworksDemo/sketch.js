// Fireworks/Ball Demo
// Asir Ratnani
// November 14, 2018
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


class Particle {
  constructor (x, y) {
    this.x = x;
    this.y = y;
    this.size = 25;
    this.dx = random(-10,10);
    this.dy = random(-10, 10);
    this.transparency = 255;
    this.color = color(random(255),random(255),random(255), this.transparency);
  }

  display() {
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, this.size, this.size);

  }

  update () {
    this.transparency -= 5;
    this.color.setAlpha(this.transparency);
    this.x += this.dx;
    this.y += this.dy;

  }
}

class Ball {
  constructor (x,y) {
    this.x = x;
    this.y = y;
    this.radius = random(100);
    this.dx = random(-20,20);
    this.dy = random(-20,20);
    this.color = color(random(255), random(255), random(255));
  }

  display() {
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
  }
  update () {
    this.x += this.dx;
    this.y += this.dy;

    if (this.y <= 0 + this.radius|| this.y >= height - this.radius) {
      this.dy *= -1;
    }
    if (this.x <= 0 + this.radius || this.x >= width - this.radius) {
      this.dx *= -1;
    }
  }
}




let fireworks = [];
let ballArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  
}

function draw() {
  background(0);
  for (let i = ballArray.length - 1; i >= 0; i--) {
    ballArray[i].update();
    ballArray[i].display();
  }

//   for(let i = fireworks.length - 1; i >= 0; i--) {
//     if (fireworks[i].transparency <= 0) {
//       // delete this firework -- already hidden
//       fireworks.splice(i,1);
//     }
//     else {
//       fireworks[i].update();
//       fireworks[i].display();
      
//     }
//   }

}

function mousePressed(){
  let someBall = new Ball(mouseX, mouseY);
  ballArray.push(someBall);
}

//   for (let i=0; i < 100; i++) {
//     let fireworkParticle = new Particle (mouseX, mouseY);
//     fireworks.push(fireworkParticle);

//   }
// }