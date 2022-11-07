// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

const ROWS = 8;
const COLS = 16;
let grid;
let cellWidth;
let cellHeight;
let autoPlay = false;
let playerX = 0;
let playerY = 0;
let entityX = 10;
let entityY = 0;
let neighbours;
let Player, Entity, EntitySeen;
let levelToLoad;
let lines;

function setup() {
  createCanvas(windowWidth, windowHeight);
  cellWidth = width/COLS;
  cellHeight = height/ROWS;
  grid = createEmpty2dArray(COLS, ROWS);
  for (let y = 0; y < COLS; y++) {
    for (let x = 0; x < ROWS; x++) {
      let tileType = lines[y][x];
      grid[y][x] = tileType;
    }
  }
}

function preload() {
  //load level data
  levelToLoad = "assets/levels/0.txt";
  lines = loadStrings(levelToLoad);


  //load tile images
  Entity = loadImage("tankBeige.png");
  Player = loadImage("tankBlue.png");
  EntitySeen = loadImage("tankRed.png");

}

function draw() {
  display();
}

function display(){  
  for (let y = 0; y < COLS; y++) {
    for (let x = 0; x < ROWS; x++) {
      showTile(grid[y][x], x, y);
    }
  }
}

function showTile(location, x, y) {
  if (location === ".") {
    rect( x*cellWidth, y*cellHeight, cellWidth, cellHeight);
  }
  else if (location === "E") {
    image(Entity, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
  }
  else if (location === "P") {
    image(Player, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
  }
}

// function displayGrid(grid) {
//   for (let y=0; y<ROWS; y++) {
//     for (let x=0; x<COLS; x++) {
//       if (grid[y][x] === 0) {
//         fill("white");
//       }
//       else if (grid[y][x] === 1) {
//         fill("black");
//       }
//       else if (grid[y][x] === 3) {
//         fill("blue");
//       }
//       else if (grid[y][x] === 4) {
//         fill("gray");
//       }
//       else if (grid[y][x] === 5) {
//         fill("red");
//       }
//       rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
//     }   
//   }
// }

// function checkAround(){
//   let nextTurn = create2dArray(COLS, ROWS);

//   for (let y=0; y<ROWS; y++) {
//     for (let x=0; x<COLS; x++) {
//       neighbours = 0;

//       //look at all cells around this one...
//       for (let i=-1; i<=1; i++) {
//         for (let j=-1; j<=1; j++) {
//           //edge case check
//           if (y+i >= 1 && y+i < ROWS && x+j >= 1 && x+j < COLS) {
//             if (grid[y+i][x+j] > 0){
//               neighbours += 1;
//             }
//           }
//         }
//       }

//       //don't count self!
//       neighbours -= grid[y][x];

//       //apply rules
//       if (grid[y][x] === 3) { 
//         if (neighbours === 1) {
//           grid[y][x] = 4;
//         }
//         else {
//           grid[y][x] = 3;
//         }
//       }

//       if (grid[y][x] === 4) { 
//         if (neighbours === 0) {
//           grid[y][x] = 3;
//         }
//         else {
//           grid[y][x] = 4;
//         }
//       }

//       if (grid[y][x] === 4) {
//         if (neighbours === 1) {
//           grid[y][x]= 5;
//         }
//         else {
//           grid[y][x] = 4;
//         }
//       }

//       if (grid[y][x] === 5) { 
//         if (neighbours === 0) {
//           grid[y][x] = 4;
//         }
//         else {
//           grid[y][x] = 4;
//         }
//       }
//     }
//   }
//   displayGrid(grid);
// }



// function keyPressed() {
//   if (keyCode === RIGHT_ARROW) {
//     if (grid[playerY][playerX+1] === 0) {
//       //reset old location to white
//       grid[playerY][playerX] = 0;
      
//       //move
//       playerX++;

//       //set new player location
//       grid[playerY][playerX] = 3;
//     }
//   }

//   if (keyCode === LEFT_ARROW) {
//     if (grid[playerY][playerX-1] === 0) {
//       //reset old location to white
//       grid[playerY][playerX] = 0;
      
//       //move
//       playerX--;

//       //set new player location
//       grid[playerY][playerX] = 3;
//     }
//   }

//   if (keyCode === UP_ARROW) {
//     if (grid[playerY-1][playerX] === 0) {
//       //reset old location to white
//       grid[playerY][playerX] = 0;
      
//       //move
//       playerY--;

//       //set new player location
//       grid[playerY][playerX] = 3;
//     }
//   }


//   if (keyCode === DOWN_ARROW) {
//     if (grid[playerY+1][playerX] === 0) {
//       //reset old location to white
//       grid[playerY][playerX] = 0;
      
//       //move
//       playerY++;

//       //set new player location
//       grid[playerY][playerX] = 3;
//     }
//   }
//   if(key === "a"){
//     autoPlay = !autoPlay;
//   }
//   if (key === " ") {
//     grid = checkAround(grid);
//   }
// }

function createEmpty2dArray(COLS, ROWS) {
  let randomGrid = [];
  for (let y = 0; y < ROWS; y++) {
    randomGrid.push([]);
    for (let x = 0; x < COLS; x++) {
      randomGrid[y].push(0);
    }
  }
  return randomGrid;
}

// function createRandom2dArray(COLS, ROWS) {
//   let emptyArray = [];
//   for (let y=0; y<ROWS; y++) {
//     emptyArray.push([]);
//     for (let x=0; x<COLS; x++) {
//       if (random(100) < 50) {
//         emptyArray[y].push(0);
//       }
//       else {
//         emptyArray[y].push(1);
//       }
//     }
//   }
//   return emptyArray;
// }
// function mousePressed() {
//   let xPos = Math.floor(mouseX/cellWidth);
//   let yPos = Math.floor(mouseY/cellHeight);

//   if (grid[yPos][xPos] === 0) {
//     grid[yPos][xPos] = 1;
//   }
//   else if (grid[yPos][xPos] === 1) {
//     grid[yPos][xPos] = 0;
//   }
// }
