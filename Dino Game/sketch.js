// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let state = "start";
let dinoImage;
let startImg;
let scalar = 3.5;

function preload() {
  dinoImage = loadImage("rex.png");
  startImg = loadImage("startbutton.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
}

function draw() {
  background(220);

  if( state === "start"){
    startScreen();
  }
  if (state === "main"){
    image(dinoImage, 200, 400, dinoImage.width/28*scalar, dinoImage.height/28*scalar);
  }
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    scalar = scalar * 1.5;
  }
  else if (keyCode === DOWN_ARROW) {
    scalar = scalar * 0.75;
  }
}

function mousePressed() {
  if (state === "start" && mouseInsideButton(windowWidth/2 - 95, windowWidth/2 + 95, windowHeight/2 - 37.5, windowHeight/2 + 37.5)){
    state = "main";
  }
}

function startScreen(){
  if (mouseInsideButton(windowWidth/2 - 95, windowWidth/2 + 95, windowHeight/2 - 37.5, windowHeight/2 + 37.5)){
    image(startImg, windowWidth/2 - 5 , windowHeight/2 , 200, 100);
  }
  else {
    image(startImg, windowWidth/2 - 5 , windowHeight/2 , 300, 150);
  }
}

function mouseInsideButton(left, right, top, bottom){
  return mouseX >= left && mouseX <= right && mouseY >= top && mouseY <= bottom;
}
