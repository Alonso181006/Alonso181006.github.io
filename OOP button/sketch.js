// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

class Button{
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.h = 100;
    this.w = 300;
    this.state = false;
  }
  isHovering(){
    if(mouseX >= this.x && mouseX <= this.x + this.w && mouseY >= this.y && mouseY <= this.y + this.h ){
      fill("red");
      rect(this.x +20, this.y +10, this.w -40, this.h -20);
    }
    else{
      fill("red");
      rect(this.x, this.y, this.w, this.h);
    }
  }
  isPressed(){
    if(mouseIsPressed){
      if(mouseX >= this.x && mouseX <= this.x + this.w && mouseY >= this.y && mouseY <= this.y + this.h ){
        return true;
      }
    }
    else{
      return false;
    }
  }
}

let firstButton, secondButton;

function setup() {
  createCanvas(windowWidth, windowHeight);
  firstButton = new Button(200, 100);
  secondButton = new Button(200, 500);
}

function draw() {
  background(255);
  if(firstButton.state === false){  
    firstButton.isHovering();
    firstButton.state = firstButton.isPressed();
  }
  if (firstButton.state === true){
    background(0);
  }
  if(secondButton.state === false){  
    secondButton.isHovering();
    secondButton.state = secondButton.isPressed();
  }
  if (secondButton.state === true){
    background(222, 0, 0);
  }
}

