// OOP Pair Programming Starter Code
// Your Names
// The Date


// ------------------------------------------------------------------------- //
// You don't need to edit this section...

let theBullets = [];
let enterprise;
let someBullet;
let shipImage, bulletImage;

function preload() {
  shipImage = loadImage("assets/enterprise.png");
  bulletImage = loadImage("assets/laser-shot.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  enterprise = new Ship(width/2, height/2, shipImage);
}

function draw() {
  background("black");
  enterprise.update();
  enterprise.display();
}

function keyPressed() {
  enterprise.handleKeyPress();
}

// ------------------------------------------------------------------------- //
// Start editing here!

class Ship {
  constructor(x, y, theImage) {
    // define the variables needed for this ship
    this.x = x;
    this.y = y;
    this.image = theImage;
    this.dx = 10;
    this.dy = 10;
  }

  update() {
    // move ship -- you might want to use the keyIsDown() function here
    if(keyIsDown(87) ){ //w
      this.y -= this.dy;
    }
    if(keyIsDown(83) ){ //s
      this.y += this.dy;
    }
    if(keyIsDown(65) ){ //a
      this.x -= this.dx;
    }
    if(keyIsDown(68) ){ //w
      this.x += this.dx;
    }
  }

  display() {
    // show the ship
    image(this.image, this.x, this.y);
    for (let i = theBullets.length -1; i >= 0; i--){
      if(theBullets[i].isOnScreen()){
        theBullets[i].display();
        theBullets[i].update();
      }
      else{
        theBullets.splice(i, 1);
      }
    }
  }

  handleKeyPress() {
    if (keyCode === 32){ //space
      someBullet = new Bullet(this.x + 39, this.y, 0, 10, bulletImage);
      theBullets.push(someBullet);
    }
  }
}

// ------------------------------------------------------------------------- //

// Extra for Experts 
//  - you can instantiate a bullet (or a bullet array) within the Ship class,
//    and call the display and update functions in the logical location of the 
//    Ship class. If you create an array of bullets, you might want to think about
//    when the bullets should be removed from the array...

class Bullet {
  constructor(x, y, dx, dy, theImage) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.image = theImage;
  }

  update() {
    this.x -= this.dx;
    this.y -= this.dy;
  }

  display() {
    image(this.image, this.x, this.y);
  }

  isOnScreen() {
    return this.y >= 0;
  }
}

