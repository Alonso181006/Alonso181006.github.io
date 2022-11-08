// Offline Dinosaur Game
// Alonso Bastidas
// Date
// Oct. 1, 2022
// Extra for Experts:
// - Added a sound effect to the dinosaur's jumping
// - Added gravity to the dinosaur

//variables
let startImg;
let resetImg;
let clouds;
let cactus;
let movement;
let ground;
let mulclouds;
let mulcactus;
let mulground;
let dinoRun1;
let dinoRun2;
let dinoCrouch1;
let dinoCrouch2;
let img = "one";
let time = "yes";
let action = "crouch";
let state = "start";
let lastTimeSwitched = 0;
let runswitch1 = 100;
let runswitch2 = 100;
let create = 0;
let xground = 2595;
let fg;
let dinox = 200;
let i = 0;
let dinoy = 450;
let p = 3000;
let smallerCanvas;
let birdUp;
let birdDown;
let mulbird;
let o = 3000;
let q = 3000;
let score = 0;
let speed = 10;
let jumpsound;


//preload images
function preload() {
  startImg = loadImage("startbutton.png");
  resetImg = loadImage("resetbutton.png");
  clouds = loadImage("cloud.png");
  cactus = loadImage ("cactusL1.png");
  ground = loadImage("floor.png");
  dinoRun1 = loadImage("dinorun1.png");
  dinoRun2 = loadImage("dinorun2.png");
  dinoCrouch1 = loadImage("dinocrouch1.png");
  dinoCrouch2 = loadImage("dinocrouch2.png");
  birdUp = loadImage("birdup.png");
  birdDown = loadImage("birddown.png");
  
}

// create window  && set values within arrays
function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  jumpsound = loadSound("jumpsound.mp3");
  mulclouds = [ { x:1000, y: 280}, { x: 800, y: 260}, ];
  mulcactus = [ { x: random(2000, 3000), y: 450, w: 50, h:50}, { x: 800, y: 450, w: 50, h:50}, ];
  mulground = [{ x: xground -1870, y: 480, w: ground.width, h:ground.height}, ];
  mulbird = [{ x: 2000, y: 360, w: 50, h: 50}, ];
  movement = 0;
  fg = new gv();
}

// center a canvas that is smaller than the Windowwidth and Window Height
function centerCanvas() {
  let x = (windowWidth - width) / 2;
  let y = (windowHeight - height) / 2;
  smallerCanvas.position(x, y);
  background(250);
}

function startScreen(){
  //if mouse within button make it smaller
  if (mouseInsideButton(windowWidth/2 - 95, windowWidth/2 + 95, windowHeight/2 - 37.5, windowHeight/2 + 37.5)){
    image(startImg, windowWidth/2 - 5 , windowHeight/2 , 200, 100);
  }
  //else button is regular size
  else {
    image(startImg, windowWidth/2 - 5 , windowHeight/2 , 300, 150);
  }
}

function resetScreen(){
  //if mouse within button make it smaller
  if (mouseInsideButton(windowWidth/2 - 95, windowWidth/2 + 95, windowHeight/2 - 37.5, windowHeight/2 + 37.5)){
    image(resetImg, windowWidth/2 - 5 , windowHeight/2 , 150, 75);
  }
  //else button is regular size
  else {
    image(resetImg, windowWidth/2 - 5 , windowHeight/2 , 200, 100);
  }
}

function mousePressed() {
  //start game if pressing start or reset button
  if (state === "start" || state === "reset" && mouseInsideButton(windowWidth/2 - 95, windowWidth/2 + 95, windowHeight/2 - 37.5, windowHeight/2 + 37.5)){
    state = "main";
  }
}

function mouseInsideButton(left, right, top, bottom){
  //if mouse is within the button return true, else return false
  return mouseX >= left && mouseX <= right && mouseY >= top && mouseY <= bottom;
}

function draw() {
  background(250);
  //if in start menu run startScreen();
  if( state === "start"){
    startScreen(CENTER);
  }
  if (state === "main"){
    //create smaller screen
    smallerCanvas = createCanvas(windowWidth, 800);  
    centerCanvas();
    //moving background
    push();
    translate(movement, 0);
    drawarrays();
    createGround();
    multipleCactus();
    multipleClouds();
    multipleBirds();
    score ++;
    pop();
    movement -= speed;
    speed = speed + 0.004;
    //dinosaur actions
    keyPressed();
    //draw score
    textSize(40);
    textFont("TimesNewRoman");
    text(score/10, 1800, 150);
    //if speed is too fast reset game
    if(speed > 30 || score > 2500){
      resetSketch();
      state = "reset";
    }
  }
  //if state = reset, run resetScreen();
  if (state === "reset"){
    resetScreen();
  }
} 

function resetSketch(){
  //reseting all the variables & arrays
  img = "one";
  lastTimeSwitched = 0;
  runswitch1 = 100;
  runswitch2 = 100;
  create = 0;
  time = "yes";
  xground = 2595;
  action = "crouch";
  this.x = 200;
  i = 0;
  this.y = 450;
  p = 3000;
  o = 3000;
  q = 3000;
  score = 0;
  speed = 10;
  mulclouds = [ { x:1000, y: 280}, { x: 800, y: 260}, ];
  mulcactus = [ { x: random(2000, 3000), y: 450, w: 50, h:50}, { x: 800, y: 450, w: 50, h:50}, ];
  mulground = [{ x: xground -1870, y: 480, w: ground.width, h:ground.height}, ];
  mulbird = [{ x: 2000, y: 360, w: 50, h: 50}, ];
  movement = 0;
}

function drawarrays(){
  //darwing all the arrays
  for (let i = 0; i < mulclouds.length; i++){
    image(clouds, mulclouds[i].x, mulclouds[i].y, clouds.width, clouds.height);
  }
  for (let i = 0; i < mulcactus.length; i++){
    image(cactus, mulcactus[i].x, mulcactus[i].y, cactus.width, cactus.height);
  }
  for (let i = 0; i < mulground.length; i++){
    image(ground, mulground[i].x, mulground[i].y, mulground.width, mulground.height);
  }
  for (let i = 0; i < mulbird.length; i++){
    image(birdUp, mulbird[i].x, mulbird[i].y, mulbird.width, mulbird.height);
  }
}

function multipleBirds(){
  //every millifew seconds push a new set of coordinates into mulbird array for it to be drawn
  if (img === "one"){
    mulbird.push({ x: o, y: 360, w: 50, h:50});
    o = o + random(2000, 4000);
  }
  else if(img === "two"){
    mulbird.push({ x: o, y: 360, w: 50, h:50});
    o = o + random(2000, 4000);
  }
}

function multipleClouds(){
  //every few milliseconds push a new set of coordinates into mulclouds array for it to be drawn
  if (img === "one"){
    mulclouds.push({ x: o, y: random(200, 250)});
    mulclouds.push({ x: o + 250, y: random(200, 250)});
    o = o + random(550, 1050);
  }
  else if (img === "two"){
    mulclouds.push({ x: o, y: random(200, 250)});
    mulclouds.push({ x: o + 250, y: random(200, 250)});
    o = o + random(550, 1050);
  }
}

function multipleCactus(){
  //every few milliseconds push a new set of coordinates into mulcactus array for it to be drawn
  if (img === "one"){
    mulcactus.push({ x: p, y: 450, w: 50, h:50});
    p = p + random(550, 1050);
  }
  else if(img === "two"){
    mulcactus.push({ x: p, y: 450, w: 50, h:50});
    p = p + random(550, 1050);
  }
}

function keyPressed(){
  //if pressing down arrow, crouch and change action state
  if (keyCode === DOWN_ARROW) {
    checkIfImageSwitched();
    dinoCrouchSwitch();
    action = "crouch";
  }
  //if pressing up arrow, jump and change action state
  else if (keyCode === UP_ARROW) {
    fg.gvs();
    fg.g();
    action = "run";
  }
  // else just dinosaur run
  else{
    checkIfImageSwitched();
    dinoRunSwitch();
  }
}

function checkIfImageSwitched() {
  // swicth 'img' to 'two' every 100 millis seconds
  if (img === "one" && millis() > lastTimeSwitched + runswitch2) {
    img = "two";
    lastTimeSwitched = millis();
  }
  // swicth 'img' to 'one' every 100 millis seconds
  else if (img === "two" && millis() > lastTimeSwitched + runswitch1) {
    img = "one";
    lastTimeSwitched = millis();
  }
} 

function dinoRunSwitch(){
  //while dinosaur running change the images to give a moving affect
  if (img === "one") {
    image(dinoRun1, dinox, dinoy, dinoRun1.width, dinoRun1.height);

  }
  else if (img === "two") {
    image(dinoRun2, dinox, dinoy, dinoRun2.width, dinoRun2.height);

  }
}

function dinoCrouchSwitch(){
  //while crouching change the images to give a moving affect
  if (img === "one") {
    image(dinoCrouch1, dinox, 460, dinoCrouch1.width, dinoCrouch1.height);
  }
  else if (img === "two") {
    image(dinoCrouch2, dinox, 460, dinoCrouch2.width, dinoCrouch2.height);
  }
}

function createGround(){
  //every few milliseconds push a new set of coordinates into mulground array for it to be drawn 
  if (img === "one"){
    mulground.push({ x: xground, y: 480, w: 50, h:50});
    xground = xground + 2395;
  }
  else if(img === "two"){
    mulground.push({ x: xground, y: 480, w: 50, h:50});
    xground = xground + 2395;
  }
}  

//Jump mechanic
this.gv = function () {
  //setting variables
  this.x = 200;
  this.y = 450;
  this.velocity = 10;
  this.gravity = 0.5;
  this.topheight = -15;
  
  //set the sprite that is affected by the varaibles above
  this.gvs = function () {
    if (img === "one") {
      image(dinoRun1, this.x, this.y, dinoRun1.width, dinoRun1.height);
  
    }
    else if (img === "two") {
      image(dinoRun2, this.x, this.y, dinoRun2.width, dinoRun2.height);
  
    }
  };
  this.g = function () {
    //if crouching while mid air reset variables so when jumping again, dino doesnt jump and returns to where the crouch button was pressed, but jumps from the ground
    if ( action === "crouch"){
      this.x = 200;
      this.y = 450;
      this.velocity = 10;
      this.gravity = 0.5;
      this.topheight = -15;
    }
    //stops height from increasing infintely (technically decreasing the height infintely) and comes back down, due to the gravity value
    this.velocity += this.gravity;
    //height increases by velocity at steady rate
    this.y += this.velocity;
    //if this.y is greater than the floor then the height increase(velocity) is -15, thus jumping
    if (this.y > 450) {
      this.velocity = 0;
      this.y = 450;
      if (keyIsDown(UP_ARROW)) {
        jumpsound.play();
        this.velocity += this.topheight;
      }
      //while up arrow is not pressed, dinosaur run
      else {
        checkIfImageSwitched();
        dinoRunSwitch();

      }
    }
  };
};



