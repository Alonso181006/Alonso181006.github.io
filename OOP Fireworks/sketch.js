// OOP Fireworks
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

class Particle {
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.dx = random(-5,5);
    this.dy = random(-5,5);
    this.diameter = 2;
    this.r = 255;
    this.g = 0;
    this.b = 0;
    this.alpha = 255;
    this.colour = color(this.r, this.g, this.b, this.alpha);
  }

  update(){
    //move
    this.x += this.dx;
    this.y += this.dy;
    // making more transparent
    this.alpha--;
    this.colour = color(this.r, this.g, this.b, this.alpha);


  }

  display(){
    fill(this.colour);
    stroke(this.colour);
    circle(this.x , this.y, this.diameter);
  }
}

let theFireworks = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  for ( let i = 0; i < theFireworks.length; i++){
    theFireworks[i].update();
    theFireworks[i].display();
  }
}

function mousePressed() {
  for(let i = 0; i < 100; i++){
    let someParticle = new Particle(mouseX, mouseY);
    theFireworks.push(someParticle);
    if(someParticle.alpha === 0){
      theFireworks[i].splice;
    }
  }
}
