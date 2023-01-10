// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let imgCircle;
let imgRect;
let rectArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  imgCircle = new Circle();
  imgRect = new Rectangle(random(0,width));
  rectArray.push(imgRect);
}

function draw() {
  background(220);
  imgCircle.display(mouseX, mouseY);
  // enemyRect();
  // for(let i = 0; i< rectArray.length -1; i++){
  //   rectArray[i].display();
  //   rectArray[i].fall();
  // }
  imgRect.display();
  imgRect.fall();
 
}


class Circle{
  constructor(){
    this.x = width/2;
    this.y = width/2;
    this.d = 100;
  }

  display(x, y){
    fill("red");
    circle(x, y, this.d);
  }

  move(){

  }

}

class Rectangle{
  constructor(x){
    this.x = x;
    this.y = 100;
    this.w = 30;
    this.dy = 2;
  }

  display(){
    fill("blue");
    rect(this.x, this.y, this.w);
  }
  fall(){
    this.y= this.y + this.dy;
  }
}

function enemyRect(){
  for(let i = 0; i < 10; i++){
    imgRect = new Rectangle(random(0,width));
    rectArray.push(imgRect);
  }
}