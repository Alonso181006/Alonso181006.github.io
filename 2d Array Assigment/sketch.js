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
  // keep this a 4:3 ratio, or it will stretch in weird ways
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

function createEmpty2dArray(cols, rows) {
  let randomGrid = [];
  for (let y = 0; y < rows; y++) {
    randomGrid.push([]);
    for (let x = 0; x < cols; x++) {
      randomGrid[y].push(0);
    }
  }
  return randomGrid;
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
