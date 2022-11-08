// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let dinoImage;
let startImg;
let scalar = 3.5;
let clouds;
let cactus;
let movement;
let ground;
let ground2;
let ground3;
let mulclouds;
let mulcactus;
let mulground;
let swap = 0;
let dinoRun1;
let dinoRun2;
let dinoCrouch1;
let dinoCrouch2;
let img = "one";
let lastTimeSwitched = 0;
let runswitch1 = 100;
let runswitch2 = 100;
let create = 0;
let lastTime = 21000;
let firstTime = 21000;
let time = "yes";
let xground = 2595;
let firstGround;
let secondGround;
let dino_r = 500;
let fg;
let action = "run";
this.x = 200;
let i = 0;
this.y = 450;
this.velocity = 0;
this.gravity = 0.3;
this.op = -10;
let hit;
let p = 3000;
let obstacles;
let randint;
let score;
let lost;
let next;
let spread;
let slider;
let dinosaur;
let state = "start";
let cnv;
let birdUp;
let birdDown;
let mulbird;
let o = 3000;
let q = 3000;


function preload() {
  dinoImage = loadImage("rex.png");
  startImg = loadImage("startbutton.png");
  clouds = loadImage("cloud.png");
  cactus = loadImage ("cactusL1.png");
  ground = loadImage("floor.png");
  ground2 = loadImage("floor2.png");
  ground3 = loadImage("floor3.png");
  dinoRun1 = loadImage("dinorun1.png");
  dinoRun2 = loadImage("dinorun2.png");
  dinoCrouch1 = loadImage("dinocrouch1.png");
  dinoCrouch2 = loadImage("dinocrouch2.png");
  birdUp = loadImage("birdup.png");
  birdDown = loadImage("birddown.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  mulclouds = [ { x:1000, y: 280}, { x: 800, y: 260}, ];
  mulcactus = [ { x: random(2000, 3000), y: 450, w: 50, h:50}, { x: 800, y: 450, w: 50, h:50}, ];
  mulground = [{ x: xground -1870, y: 480, w: ground.width, h:ground.height}, ];
  mulbird = [{ x: 2000, y: 360, w: 50, h: 50}, ];
  movement = 0;
  fg = new gh();
}

function centerCanvas() {
  let x = (windowWidth - width) / 2;
  let y = (windowHeight - height) / 2;
  cnv.position(x, y);
  background(250);
}


function draw() {
  background(255);
  if( state === "start"){
    startScreen();
  }
  if (state === "main"){
    image(dinoRun1, this.x, this.y, dinoRun1.width, dinoRun1.height);
    cnv = createCanvas(1000, 500);  
    centerCanvas();
    push();
    translate(movement, 0);
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
    multipleClouds();
    
    constantGround();
    staggeredGround();
    createCactus();
    multipleBirds();
    birdFlySwitch();
    pop();
    movement -= 10;
    keyPressed();
  }
} 

function birdFlySwitch(){
  if (img === "one") {
    image(birdUp, mulbird[i].x, 360, birdUp.width, birdUp.height);
  }
  else if (img === "two") {
    image(birdDown, mulbird[i], 360, birdDown.width, birdDown.height);
  }
}

function multipleBirds(){
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
  if (img === "one"){
    mulclouds.push({ x: o, y: random(200, 250)});
    o = o + random(10, 50);
  }
  else if (img === "two"){
    mulclouds.push({ x: o, y: random(200, 250)});
    o = o + random(10, 50);
  }
}

function createCactus(){
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
  if (keyCode === DOWN_ARROW) {
    handleKeys();
    action = "crouch";
  }
  else if (keyCode === UP_ARROW) {
    fg.ghd();
    fg.g();
    action = "run";
  }
  else{
    checkIfImageSwitched();
    dinoRunSwitch();
  }
}

function handleKeys() {
  if (keyCode === DOWN_ARROW) {
    for(let o = 0; o < 50; o++, dino_r--){
      checkIfImageSwitched();
      dinoCrouchSwitch();
    }
  }
  else{
    checkIfImageSwitched();
    dinoRunSwitch();
  }
}

function mousePressed() {
  if (state === "start" && mouseInsideButton(windowWidth/2 - 95, windowWidth/2 + 95, windowHeight/2 - 37.5, windowHeight/2 + 37.5)){
    state = "main";
  }
}

function startScreen(){
  if (mouseInsideButton(windowWidth/2 - 95, windowWidth/2 + 95, windowHeight/2 - 37.5, windowHeight/2 + 37.5)){
    image(startImg, windowWidth/2 - 5 , windowHeight/2 , 200, 100);
  }
  else {
    image(startImg, windowWidth/2 - 5 , windowHeight/2 , 300, 150);
  }
}

function mouseInsideButton(left, right, top, bottom){
  return mouseX >= left && mouseX <= right && mouseY >= top && mouseY <= bottom;
}

function dinoRunSwitch(){
  if (img === "one") {
    image(dinoRun1, this.x, this.y, dinoRun1.width, dinoRun1.height);

  }
  else if (img === "two") {
    image(dinoRun2, this.x, this.y, dinoRun2.width, dinoRun2.height);

  }
}

function checkIfImageSwitched() {
  if (img === "one" && millis() > lastTimeSwitched + runswitch2) {
    img = "two";
    lastTimeSwitched = millis();
  }
  else if (img === "two" && millis() > lastTimeSwitched + runswitch1) {
    img = "one";
    lastTimeSwitched = millis();
  }
}

function dinoCrouchSwitch(){
  if (img === "one") {
    image(dinoCrouch1, this.x, 460, dinoCrouch1.width, dinoCrouch1.height);
  }
  else if (img === "two") {
    image(dinoCrouch2, this.x, 460, dinoCrouch2.width, dinoCrouch2.height);
  }
}

function constantGround(){
  if ( time === "yes" && millis() > create + firstTime){
    create = millis();
    time = "no";
  }
  else if (time === "no" && millis() > create + lastTime) {
    create = millis();
    time = "yes";
  }
}
function staggeredGround(){
  if (img === "one"){
    mulground.push({ x: xground, y: 480, w: 50, h:50});
    xground = xground + 2395;
  }
  else if(img === "two"){
    mulground.push({ x: xground, y: 480, w: 50, h:50});
    xground = xground + 2395;
  }
}  


this.gh = function () {
  this.x = 200;
  this.y = 450;
  this.velocity = 10;
  this.gravity = 0.5;
  this.op = +15;
  
  this.ghd = function () {
    if (img === "one") {
      image(dinoRun1, this.x, this.y, dinoRun1.width, dinoRun1.height);
  
    }
    else if (img === "two") {
      image(dinoRun2, this.x, this.y, dinoRun2.width, dinoRun2.height);
  
    }
  };
  this.g = function () {
    if ( action === "crouch"){
      this.x = 200;
      this.y = 450;
      this.velocity = 10;
      this.gravity = 0.5;
      this.op = -15;
    }
    this.velocity += this.gravity;
    this.y += this.velocity;

    if (this.y > 450) {
      this.velocity = 0;
      this.y = 450;
      if (keyIsDown(UP_ARROW)) {
        this.velocity += this.op;
      }
      else {
        checkIfImageSwitched();
        dinoRunSwitch();

      }
    }
  };
};

