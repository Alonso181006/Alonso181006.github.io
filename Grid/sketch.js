// Basic Grid Demo
// Alonso Bastidas
// Oct 25, 2022
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let grid = [[1,0,1,1], [1,0,1,0,1], [0,0,1,0]];


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  displayGrid(grid);
}

function displayGrid(grid){
  let cellHeight = height / grid.length;
  for ( let y = 0; y < grid.length; y++){
    let cellWidth = width / grid[y].length;
    for ( let x = 0; x < grid[y].length; x++){
      if (grid[y][x] === 0){
        fill("white");
      }
      else if(grid[y][x] === 1 ){
        fill ("black");
      }
      rect(x * cellWidth, y * cellHeight, cellWidth, cellHeight);
    }
  }
}

function mousePressed(){
  let cellHeight = height / grid.length;
  for ( let j = 0; j < grid.length; j++){
    let cellWidth = width / grid[j].length;
    let x = Math.floor(mouseX /cellWidth);
    let y = Math.floor(mouseY /cellHeight);

    if(grid[y][x] === 0){
      grid[y][x] = 1;
    }
    else if(grid[y][x] === 1){
      grid[y][x] = 0;
    }
  }
}