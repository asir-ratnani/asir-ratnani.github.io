// Fireworks Demo
// Asir Ratnani
// November 14, 2018
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


class Particle {
  constructor (x, y,) {
    this.x = x;
    this.y = y;
    this.size = 25;
    this.dx = random(-1,1);
    this.dy = random(-100, 100);
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




let fireworks = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  background(0);

  for(let i=0; i < fireworks.length; i++) {
    fireworks[i].update();
    fireworks[i].display();
    textSize(50);
    textAlign(CENTER);
    text("FIREWORKS", width/2, height/2);
  }

}

function mousePressed(){
  
  for (let i=0; i < 100; i++) {
    let fireworkParticle = new Particle (mouseX, mouseY);
    fireworks.push(fireworkParticle);

  }
}