// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

class Bullet{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.dx = 5;
    this.diameter = 8;
    this.colour = "black";
  }
  display(){
    fill(this.colour);
    stroke(this.colour);
    circle(this.x, this.y, this.diameter);
  }
  move(){
    this.x += this.dx;
  }
  isDead(){
    return this.x > 2000;
  }
}

let infiniteBullets = [];

let playerX = 100;
let playerY = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
  let someBullet = new Bullet(playerX, playerY);
  infiniteBullets.push(someBullet);
}

function draw() {
  background(220);
  fill("red");
  rect(playerX, playerY, 10);
  for (let i = 0; i < infiniteBullets.length; i++){
    if(infiniteBullets[i].isDead){
      infiniteBullets[i].splice(i,1);
    }
    else{
      infiniteBullets[i].display();
      infiniteBullets[i].move();
    }
  }

}

function mousePressed() {
  let someBullet = new Bullet(playerX, playerY);
  infiniteBullets.push(someBullet);
}
