// Asir Ratnani
// October 9, 2018
// Image Manipulation Demo
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let potato;
let grayPotato;

function preload() {
  potato = loadImage("assets/potatoes.jpeg");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  image(potato,0,0);
  grayPotato = makeGrayscale(potato);
}

function draw() {

}

function makeGrayscale(sourceImage) {
  let img = createImage(sourceImage.width,sourceImage.height);

  sourceImage.loadPixels();
  img.loadPixels();


  for (let x = 0; x < img.width; x++) {
    for (let y = 0; y < img.height; y++) {
      let thisPixel = sourceImage.get(x, y);

      let r = red(thisPixel);
      let g = green(thisPixel);
      let b = blue(thisPixel);

      let average = (r + g + b) / 3;

      let newPixel = color(average, average, average);

      img.set(x, y, newPixel);
    }
  }
  img.updatePixels();
  return img;
}
