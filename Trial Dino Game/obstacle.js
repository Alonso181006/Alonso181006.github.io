let cactus;
let mulcactus;

function preload(){
  cactus = loadImage ("cactusL1.png");
}

class Obstacle {
  constructor() {
    this.h = cactus.height;
    this.w = cactus.width;
    this.x = width;
    this.y = height - this.h;
  }
    
  move() {
    this.x -= 6;
  }
    
  show() {
    image(cactus, this.x, this.y, this.w, this.h);
  }
}