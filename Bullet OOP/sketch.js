// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

class Bullet{
  constructor(x,y, theImage){
    this.x = x + 35;
    this.y = y + 20;
    this.dx = 5;
    this.w = 8;
    this.h = 8;
    this.colour = "black";
    this.image = theImage;
  }
  display(){

    image(this.image, this.x, this.y, this.w, this.h);
  }
  move(){
    this.x += this.dx;
  }
  isDead(){
    return this.x > width;
  }
}

let infiniteBullets = [];

let playerX = 65;
let playerY = 85;
let megaman;
let plasmabullet;

function preload(){
  megaman = loadImage("megaman.png");
  plasmabullet = loadImage("plasmabullet.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  let someBullet = new Bullet(playerX, playerY, plasmabullet);
  infiniteBullets.push(someBullet);
}

function draw() {
  background(255);
  fill("red");
  image(megaman, playerX, playerY, megaman.width * 0.25, megaman.height *0.25);
  for (let i = 0; i < infiniteBullets.length; i++){
    if(infiniteBullets[i].isDead()){
      infiniteBullets.splice(i,1);
    }
    else{
      infiniteBullets[i].display();
      infiniteBullets[i].move();
    }
  }

}

function mousePressed() {
  let someBullet = new Bullet(playerX, playerY, plasmabullet);
  infiniteBullets.push(someBullet);
}
