// // Project Title
// // Your Name
// // Date
// //
// // Extra for Experts:
// // - describe what you did to take this project "above and beyond"


// let state = "start";
// let dinoImage;
// let startImg;
// let scalar = 3.5;
// let clouds;
// let movement;
// let ground;
// let ground2;
// let ground3;
// let mulclouds;
// let swap = 0;
// let dinoRun1;
// let dinoRun2;
// let img = "one";
// let lastTimeSwitched = 0;
// let runswitch1 = 100;
// let runswitch2 = 100;
// let create = 0;
// let lastTime = 7080;
// let firstTime = 7080;
// let time = "yes";
// let xground = 2595;
// let firstGround;
// let secondGround;

// function preload() {
//   dinoImage = loadImage("rex.png");
//   startImg = loadImage("startbutton.png");
//   clouds = loadImage("cloud.png");
//   ground = loadImage("floor.png");
//   ground2 = loadImage("floor2.png");
//   ground3 = loadImage("floor3.png");
//   dinoRun1 = loadImage("dinorun1.png");
//   dinoRun2 = loadImage("dinorun2.png");
// }

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   imageMode(CENTER);
//   mulclouds = [ { x:1000, y: 200}, { x: 800, y: 300} ];
//   movement = 0;
// }

// function draw() {
//   background(255);
//   if( state === "start"){
//     startScreen();
//   }
//   if (state === "main"){

//     push();
//     translate(movement, 0);
//     for (let i = 0; i < mulclouds.length; i++){
//       image(clouds, mulclouds[i].x, mulclouds[i].y, clouds.width, clouds.height);
//     }
//     constantGround();
//     staggeredGround();
//     pop();
//     movement -= 5;
//     checkIfImageSwitched();
//     dinoRunSwitch();
//   }
// }
  

// function keyPressed() {
//   if (keyCode === UP_ARROW) {
//     scalar = scalar * 1.5;
//   }
//   else if (keyCode === DOWN_ARROW) {
//     scalar = scalar * 0.75;
//   }
// }

// function mousePressed() {
//   if (state === "start" && mouseInsideButton(windowWidth/2 - 95, windowWidth/2 + 95, windowHeight/2 - 37.5, windowHeight/2 + 37.5)){
//     state = "main";
//   }
// }

// function startScreen(){
//   if (mouseInsideButton(windowWidth/2 - 95, windowWidth/2 + 95, windowHeight/2 - 37.5, windowHeight/2 + 37.5)){
//     image(startImg, windowWidth/2 - 5 , windowHeight/2 , 200, 100);
//   }
//   else {
//     image(startImg, windowWidth/2 - 5 , windowHeight/2 , 300, 150);
//   }
// }

// function mouseInsideButton(left, right, top, bottom){
//   return mouseX >= left && mouseX <= right && mouseY >= top && mouseY <= bottom;
// }

// function dinoRunSwitch(){
//   if (img === "one") {
//     image(dinoRun1, 200, 500, dinoRun1.width, dinoRun1.height);
//   }
//   else if (img === "two") {
//     image(dinoRun2, 200, 500, dinoRun2.width, dinoRun2.height);
//   }
// }

// function checkIfImageSwitched() {
//   if (img === "one" && millis() > lastTimeSwitched + runswitch2) {
//     img = "two";
//     lastTimeSwitched = millis();
//   }
//   else if (img === "two" && millis() > lastTimeSwitched + runswitch1) {
//     img = "one";
//     lastTimeSwitched = millis();
//   }
// }

// function constantGround(){
//   if ( time === "yes" && millis() > create + firstTime){
//     create = millis();
//     time = "no";
//     xground = xground + 2595;
//   }
//   else if (time === "no" && millis() > create + lastTime) {
//     create = millis();
//     time = "yes";
//     xground = xground + 2595;
//   }
// }
// function staggeredGround(){
//   if (time === "yes") {
//     firstGround = image(ground, xground, 530, ground.width, ground.height);
//     secondGround = image(ground2, xground -2395, 530, ground2.width, ground2.height);
//     secondGround = image(ground2, xground -4790, 530, ground2.width, ground2.height);
    


//   }
//   else if (time === "no") {
//     image(ground, xground -2395, 530, ground.width, ground.height);
//     image(ground2, xground, 530, ground2.width, ground2.height);
//     image(ground3, xground -4790, 530, ground2.width, ground2.height);

//   }
// }


