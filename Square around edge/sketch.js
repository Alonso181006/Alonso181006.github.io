// Square around edge
// Alonso Bastidas
// Sept 26, 2022
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x = 0;
let y = 0;
let speed = 50;
let dx = speed;
let dy = 0;
let squareSize = 50;
let squareColor;

function setup() {
  createCanvas(windowWidth, windowHeight);
  squareColor = color(255, 0, 0);
}

function draw() {
  background(220);
  drawSquare();
  moveSquare();
  changeDirection();
}

function drawSquare() {
  fill(squareColor);
  noStroke();
  square(x, y, squareSize);
}

function moveSquare() {
  x += dx;
  y += dy;
}

function changeDirection(){
  if (x >= width - squareSize && y === 0) {
    dx = 0;
    dy = speed;
  
  }
  if (x >= width - squareSize && y >= height - squareSize) {
    dx = -1 * speed;
    dy = 0;
  
  }
  if (x === 0 && y >= height - squareSize) {
    dx = 0;
    dy = -1 * speed;
  
  }
  if ( x === 0 && y === 0){
    dx = speed;
    dy = 0;
  }
}
