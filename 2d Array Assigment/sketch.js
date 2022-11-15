// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let tiles;
let player, enemy, madEnemy;
let tilesHigh, tilesWide;
let tileWidth, tileHeight;
let levelToLoad;
let lines;
let playerX = 2;
let playerY = 7;
let closedSet = [];
let openSet = [];
let start;
let end;
let path = [];


function preload() {
  //load level data
  levelToLoad = "0.txt";
  lines = loadStrings(levelToLoad);
  //load tile images
  player = loadImage("tankBlue.png");
  enemy = loadImage("tankBeige.png");
  madEnemy = loadImage("tankRed.png");
  tiles[playerX][playerY] = "P";

}

function setup() {
  createCanvas(windowWidth, windowHeight);

  tilesHigh = lines.length;
  tilesWide = lines[0].length;

  tileWidth = width / tilesWide;
  tileHeight = height / tilesHigh;

  tiles = createEmpty2dArray(tilesWide, tilesHigh);

  //put values into 2d array of characters
  for (let y = 0; y < tilesHigh; y++) {
    for (let x = 0; x < tilesWide; x++) {
      let tileType = lines[y][x];
      tiles[y][x] = tileType;
    }
  }
}

function draw() {
  display();
}

function display() {
  for (let y = 0; y < tilesHigh; y++) {
    for (let x = 0; x < tilesWide; x++) {
      showTile(tiles[y][x], x, y);
    }
  }
}

function showTile(location, x, y) {
  if (location === "P") {
    image(player, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  }
  else if (location === "E") {
    image(enemy, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  }
  else if (location === "M") {
    image(madEnemy, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  }
  else if (location === ".") {
    rect( x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  }

}

function createEmpty2dArray(tilesWide, tilesHigh) {
  let randomtiles = [];
  for (let y = 0; y < tilesHigh; y++) {
    randomtiles.push([]);
    for (let x = 0; x < tilesWide; x++) {
      randomtiles[y].push(0);
    }
  }
  return randomtiles;
}
function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    if (tiles[playerY][playerX+1] === ".") {
      //reset old location to white
      tiles[playerY][playerX] = ".";
      
      //move
      playerX++;

      //set new player location
      tiles[playerY][playerX] = "P";
    }
  }

  if (keyCode === LEFT_ARROW) {
    if (tiles[playerY][playerX-1] === ".") {
      //reset old location to white
      tiles[playerY][playerX] = ".";
      
      //move
      playerX--;

      //set new player location
      tiles[playerY][playerX] = "P";
    }
  }

  if (keyCode === UP_ARROW) {
    if (tiles[playerY-1][playerX] === ".") {
      //reset old location to white
      tiles[playerY][playerX] = ".";
      
      //move
      playerY--;

      //set new player location
      tiles[playerY][playerX] = "P";
    }
  }

  if (keyCode === DOWN_ARROW) {
    if (tiles[playerY+1][playerX] === ".") {
      //reset old location to white
      tiles[playerY][playerX] = ".";
      
      //move
      playerY++;

      //set new player location
      tiles[playerY][playerX] = "P";
    }
  }
}

// A* (star) Pathfinding
// Initialize both open and closed list
//let the openList equal empty list of nodes
//let the closedList equal empty list of nodes
// Add the start node
//put the startNode on the openList (leave it's f at zero)
// Loop until you find the end
//while the openList is not empty
// Get the current node
//let the currentNode equal the node with the least f value
//remove the currentNode from the openList
//add the currentNode to the closedList
// Found the goal
//if currentNode is the goal
//Congratz! You've found the end! Backtrack to get path
// Generate children
//let the children of the currentNode equal the adjacent nodes
    
//for each child in the children
// Child is on the closedList
//if child is in the closedList
//continue to beginning of for loop
// Create the f, g, and h values
//child.g = currentNode.g + distance between child and current
//child.h = distance from child to end
//child.f = child.g + child.h
// Child is already in openList
//if child.position is in the openList's nodes positions
//if the child.g is higher than the openList node's g
//continue to beginning of for loop
// Add the child to the openList
//add the child to the openList

// class tilesPoint{
//   constructor(x, y){
//     this.x = x;
//     this.y = y;
//     this.f = 0;
//     this.g = 0;
//     this.h = 0;
//     this.neighbors = [];
//     this.parent = undefined;
//   }

//   updateNeighbors(tiles){
//     let i = this.x;
//     let j = this.y;
//     if (i < tilesHigh - 1) {
//       this.neighbors.push(tiles[i + 1][j]);
//     }
//     if (i > 0) {
//       this.neighbors.push(tiles[i - 1][j]);
//     }
//     if (j < tilesWide - 1) {
//       this.neighbors.push(tiles[i][j + 1]);
//     }
//     if (j > 0) {
//       this.neighbors.push(tiles[i][j - 1]);
//     }
//   }
// }

// function init() {
//   //making a 2D array
//   for (let i = 0; i < tilesHigh; i++) {
//     tiles[i] = new Array(tilesWide);
//   }

//   for (let i = 0; i < tilesHigh; i++) {
//     for (let j = 0; j < tilesWide; j++) {
//       tiles[i][j] = new tilesPoint(i, j);
//     }
//   }

//   for (let i = 0; i < tilesHigh; i++) {
//     for (let j = 0; j < tilesWide; j++) {
//       tiles[i][j].updateNeighbors(tiles);
//     }
//   }

//   start = tiles[0][0];
//   end = tiles[tilesHigh- 1][tilesWide- 1];

//   openSet.push(start);
// }

// function search() {
//   init();
//   while (openSet.length > 0) {
//     //assumption lowest index is the first one to begin with
//     let lowestIndex = 0;
//     for (let i = 0; i < openSet.length; i++) {
//       if (openSet[i].f < openSet[lowestIndex].f) {
//         lowestIndex = i;
//       }
//     }
//     let current = openSet[lowestIndex];

//     if (current === end) {
//       let temp = current;
//       path.push(temp);
//       while (temp.parent) {
//         path.push(temp.parent);
//         temp = temp.parent;
//       }
//       console.log("DONE!");
//       // return the traced path
//       return path.reverse();
//     }

//     //remove current from openSet
//     openSet.splice(lowestIndex, 1);
//     //add current to closedSet
//     closedSet.push(current);

//     let neighbors = current.neighbors;

//     for (let i = 0; i < neighbors.length; i++) {
//       let neighbor = neighbors[i];

//       if (!closedSet.includes(neighbor)) {
//         let possibleG = current.g + 1;

//         if (!openSet.includes(neighbor)) {
//           openSet.push(neighbor);
//         } 
//         else if (possibleG >= neighbor.g) {
//           continue;
//         }

//         neighbor.g = possibleG;
//         neighbor.h = heuristic(neighbor, end);
//         neighbor.f = neighbor.g + neighbor.h;
//         neighbor.parent = current;
//       }
//     }
//   }
// }

// const COLS = 5;
// const ROWS = 5;
// let cellWidth;
// let cellHeight;


// let openSet = [];
// let closedSet = [];

// let player;
// let enemy;

// let grid = new Array(COLS);

// class Cell {
//   constructor(i,j) {
//     this.x = i;
//     this.y = j;
//     this.f = 0;
//     this.g = 0;
//     this.h = 0;
//   }

//   display(){
//     fill("white");
//     stroke(0);
//     rect(this.x * cellWidth, this.y * cellHeight, cellWidth, cellHeight);
//   }
// }

// function setup(){
//   createCanvas(windowWidth, windowHeight);
//   cellWidth = width / COLS;
//   cellHeight = height / ROWS;

//   //Making a 2d Array
//   for (let i = 0; i< COLS; i++){
//     grid[i] = new Array(ROWS);
//   }

//   for (let i = 0; i< COLS; i++){
//     for (let j = 0; j < ROWS; j++){
//       grid[i][j] = new Cell();
//     }
//   }

//   player = grid[0][0];
//   enemy = grid[COLS -1][ROWS-1];

//   openSet.push(player);
// }

// function draw(){
//   background(255);
//   if (openSet.length > 0){  
//   //we can keep going
//   }
//   else{
//     // no solution
//   }

//   for (let i = 0; i< COLS; i++){
//     for (let j = 0; j < ROWS; j++){
//       grid[i][j].display(i,j);
//     }
//   }

// }

/// Path Finding Code
function heuristic(position0, position1) {
  let d1 = Math.abs(position1.x - position0.x);
  let d2 = Math.abs(position1.y - position0.y);

  return d1 + d2;
}

