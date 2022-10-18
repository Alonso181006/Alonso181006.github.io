// Array Demo
// Alonso Bastidas
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let thisCircle = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  displayCircles();
}

function draw() {
  background(0);
}

function displayCircles(){
  for (let i = 0; i < thisCircle.length; i++){
    fill(thisCircle[i].theColor);
    circle(thisCircle[i].x, thisCircle[i].y, thisCircle[i].radius);
  }
}

function mousePressed(){
  spawnCircle();
}

function spawnCircle(){
  let theCircles = {
    X: mouseX,
    y: mouseY,
    radius: 50,
    theColor: color(random(255), random(255), random(255))
  };
  thisCircle.push(theCircles);
}
