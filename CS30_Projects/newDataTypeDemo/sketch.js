// Initial Classes Demo - New Data Type
// Asir Ratnani
// November 13, 2018
//

class Dog {
  // constructor() {
  //   this.name = "Fido";
  //   this.age = "0";
  // }
  constructor(name) {
    this.name = name;
    this.age = "0";
  }
  bark () {
    console.log("Woof! My name is " + this.name);
  }
}


let myDog = new Dog("Asir the Great");
let otherdog = new Dog("Snooop");

function setup() {
  createCanvas(windowWidth, windowHeight);
  myDog.bark();
  otherdog.bark();
}

function draw() {
  background(220);
}
