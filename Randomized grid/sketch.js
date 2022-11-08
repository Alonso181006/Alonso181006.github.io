// Randomized 2d Grid
// Alonso
//Oct 26, 2022
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let grid;
const ROWS = 10;
const COLS = 10;
let cellWidth;
let cellHeight;

function setup() {
  createCanvas(windowWidth, windowHeight);
  cellWidth = width /COLS;
  cellHeight = height / ROWS;
  grid = createRandom2dArray(COLS,ROWS);
}

function draw() {
  background(220);
  displayGrid(grid);
}

function create2dArray(COLS, ROWS){
  let emptyArray = [];
  for (let y=0; y < ROWS; y++){
    emptyArray.push([]);
    for ( let x=0; x<COLS; x++){
      emptyArray[y].push(0);
    }
  }
  return emptyArray;
}

function displayGrid(grid){
  for(let y = 0; y < ROWS; y++){
    for ( let x = 0; x < COLS; x++){
      if( grid[y][x]=== 0){
        fill("white");
      }
      else if(grid[y][x] === 1){
        fill("black");
      }

      rect(x * cellWidth, y * cellHeight, cellWidth, cellHeight);
    }
  }
}

function createRandom2dArray(COLS, ROWS){
  let emptyArray = [];
  for (let y=0; y < ROWS; y++){
    emptyArray.push([]);
    for ( let x=0; x<COLS; x++){
      if (random(100) < 50){
        emptyArray[y].push(0);
      }
      else{
        emptyArray[y].push(1);
      }
    }
  }
  return emptyArray;
}

function mousePressed(){
  let x = Math.floor(mouseX / cellWidth);
  let y = Math.floor(mouseY /cellHeight);
  if(grid[y][x] === 0){
    grid[y][x] = 1;
  }
  else if(grid[y][x] === 1){
    grid[y][x] = 0;
  }
}
