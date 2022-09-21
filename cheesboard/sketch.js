// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let i = 0;
let h = 420;
let w = h;
function setup() {
  createCanvas(h, w);
}

let colorList = ["white", "black"];

function draw() {
  for (let x = 0; x < width; x += width / 8) {
    checker();
    for (let y = 0; y < height; y += height / 8) {
      square(x, y, width / 8);
      checker();
    }
  }
}
function checker(){
  if (i===0){
    fill("black")
    i++;
  } else {
    fill("white")
    i--
  }
}