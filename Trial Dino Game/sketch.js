// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let obstacles;
let randint;
let score;
let lost;
let next;
let spread;
let slider;
let dinosaur;
let state = "main";
let cnv;


function centerCanvas() {
  let x = (windowWidth - width) / 2;
  let y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function setup() {
  cnv =createCanvas(1000, 500);  
  centerCanvas();
  resetSketch();
}

function keyPressed() {
  if (key === ' ') {
    dinosaur.jump();
    if (lost) {
      resetSketch();
    }
  }
}

function resetSketch() {
  lost = false;
  obstacles = [];
  next = 0;
  dinosaur = new Dinosaur();
  new Obstacle();
  randint = int(random(50, 150));
  loop();
}

function draw() {
  background(220);
  if (state === "main"){
    text(score, 5, 24);
    next += 1;
    if (next === randint) {
      obstacles.push(new Obstacle());
      next = 0;
    }
    for (let o of obstacles) {
      if (o.x < 0) {
        if (obstacles.length > 3) {
          obstacles.shift();
        }
      }
      o.move();
      o.show();
      if (dinosaur.hits(o)) {
        console.log("Game Over!");
        lost = true;
        noLoop();
      }
    }
    dinosaur.show();
    dinosaur.move();
  }
}






