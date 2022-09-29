// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let dinoImage;
let scalar = 3.5;

function preload() {
  dinoImage = loadImage("rex.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
}

function draw() {
  background(220);
  image(dinoImage, 200, 200, dinoImage.width*scalar, dinoImage.height*scalar);
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    scalar = scalar * 1.5;
  }
  else if (keyCode === DOWN_ARROW) {
    scalar = scalar * 0.75;
  }
}
