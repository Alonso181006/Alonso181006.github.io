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

/// Path Finding Code
function heuristic(position0, position1) {
  let d1 = Math.abs(position1.x - position0.x);
  let d2 = Math.abs(position1.y - position0.y);

  return d1 + d2;
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