// Game of Life
// Alonso
//Oct 27, 2022
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

const ROWS = 25;
const COLS = 50;
let grid;
let cellWidth;
let cellHeight;
let autoPlay = false;
let gosperGun;

function preload(){
  gosperGun = loadJSON("gosper.json");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cellWidth = width/COLS;
  cellHeight = height/ROWS;
  grid = createRandom2dArray(COLS, ROWS);
}

function draw() {
  background(220);
  if (autoPlay && frameCount % 2=== 0){
    grid = takeTurn(grid);
  }
  displayGrid(grid);
}

function keyPressed() {
  if (key === "e") {
    grid = create2dArray(COLS, ROWS);
  }
  if (key === " ") {
    grid = takeTurn(grid);
  }
  if(key === "a"){
    autoPlay = !autoPlay;
  }
  if(key === "g"){
    grid = gosperGun;
  }
}


function mousePressed() {
  let xPos = Math.floor(mouseX/cellWidth);
  let yPos = Math.floor(mouseY/cellHeight);

  if (grid[yPos][xPos] === 0) {
    grid[yPos][xPos] = 1;
  }
  else if (grid[yPos][xPos] === 1) {
    grid[yPos][xPos] = 0;
  }
}

function displayGrid(grid) {
  for (let y=0; y<ROWS; y++) {
    for (let x=0; x<COLS; x++) {
      if (grid[y][x] === 0) {
        fill("white");
      }
      else if (grid[y][x] === 1) {
        fill("black");
      }
      rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
    }
  }
}

function create2dArray(COLS, ROWS) {
  let emptyArray = [];
  for (let y=0; y<ROWS; y++) {
    emptyArray.push([]);
    for (let x=0; x<COLS; x++) {
      emptyArray[y].push(0);
    }
  }
  return emptyArray;
}

function createRandom2dArray(COLS, ROWS) {
  let emptyArray = [];
  for (let y=0; y<ROWS; y++) {
    emptyArray.push([]);
    for (let x=0; x<COLS; x++) {
      if (random(100) < 50) {
        emptyArray[y].push(0);
      }
      else {
        emptyArray[y].push(1);
      }
    }
  }
  return emptyArray;
}