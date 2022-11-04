// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

const ROWS = 25;
const COLS = 50;
let grid;
let cellWidth;
let cellHeight;
let autoPlay = false;
let playerX = 0;
let playerY = 0;
let entityX = 10;
let entityY = 0;
let neighbours;

function setup() {
  createCanvas(windowWidth, windowHeight);
  cellWidth = width/COLS;
  cellHeight = height/ROWS;
  grid = create2dArray(COLS, ROWS);
  grid[playerY][playerX] = 9;
  grid[entityY][entityX] = 4;
}

function draw() {
  background(220);
  if (autoPlay && frameCount % 2=== 0){
    grid = checkAround(grid);
  }
  displayGrid(grid);
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
      else if (grid[y][x] === 9) {
        fill("blue");
      }
      else if (grid[y][x] === 4) {
        fill("gray");
      }
      else if (grid[entityY][entityX] === 5) {
        fill("red");
      }
      rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
    }   
  }
}

function checkAround(){
  let nextTurn = create2dArray(COLS, ROWS);

  for (let y=0; y<ROWS; y++) {
    for (let x=0; x<COLS; x++) {
      neighbours = 0;

      //look at all cells around this one...
      for (let i=-1; i<=1; i++) {
        for (let j=-1; j<=1; j++) {
          //edge case check
          if (y+i >= 1 && y+i < ROWS && x+j >= 1 && x+j < COLS) {
            neighbours += grid[y+i][x+j];
          }
        }
      }

      //don't count self!
      neighbours -= grid[y][x];

      //apply rules
      if (grid[playerY][playerX] === 9) { //alive
        if (neighbours === 1) {
          nextTurn[playerY][playerX] = 4;
        }
        else {
          nextTurn[playerY][playerX] = 9;
        }
      }

      if (grid[playerY][playerX] === 4) { //dead
        if (neighbours === 0) {
          nextTurn[playerY][playerX] = 9;
        }
        else {
          nextTurn[playerY][playerX] = 4;
        }
      }

      if (grid[y][entityX] === 4) { //alive
        if (neighbours === 1) {
          nextTurn[y][entityX] = 5;
        }
        else {
          nextTurn[y][entityX] = 4;
        }
      }

      if (grid[y][x] === 5) { //dead
        if (neighbours === 0) {
          nextTurn[y][x] = 4;
        }
        else {
          nextTurn[y][x] = 4;
        }
      }
    }
  }

  return nextTurn;
}



function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    if (grid[playerY][playerX+1] === 0) {
      //reset old location to white
      grid[playerY][playerX] = 0;
      
      //move
      playerX++;

      //set new player location
      grid[playerY][playerX] = 9;
    }
  }

  if (keyCode === LEFT_ARROW) {
    if (grid[playerY][playerX-1] === 0) {
      //reset old location to white
      grid[playerY][playerX] = 0;
      
      //move
      playerX--;

      //set new player location
      grid[playerY][playerX] = 9;
    }
  }

  if (keyCode === UP_ARROW) {
    if (grid[playerY-1][playerX] === 0) {
      //reset old location to white
      grid[playerY][playerX] = 0;
      
      //move
      playerY--;

      //set new player location
      grid[playerY][playerX] = 9;
    }
  }


  if (keyCode === DOWN_ARROW) {
    if (grid[playerY+1][playerX] === 0) {
      //reset old location to white
      grid[playerY][playerX] = 0;
      
      //move
      playerY++;

      //set new player location
      grid[playerY][playerX] = 9;
    }
  }
  if(key === "a"){
    autoPlay = !autoPlay;
  }
  if (key === " ") {
    grid = checkAround(grid);
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
