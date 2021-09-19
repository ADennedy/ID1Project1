var locY1, locY2, locY3, locY4, locY5, locY6, locY7, locY8, locY9, locY10;
var locX1, locX2, locX3, locX4, locX5, locX6, locX7, locX8, locX9, locX10;
var changeX1, changeX2, changeX3, changeX4, changeX5, changeX6, changeX7, changeX8, changeX9, changeX10;
var expression, faceNeu, faceHap, faceMad;
let background, hand, fish1, fish2, fish3, fish4, fish5, trash1, trash2, trash3, trash4, trash5, neutral, happy, mad;
function setup() {
  // put setup code here
  createCanvas(1000,1000);
  locY1 = random(95,680);
  locY2 = random(95,680);
  locY3 = random(95,680);
  locY4 = random(95,680);
  locY5 = random(95,680);
  locY6 = random(95,680);
  locY7 = random(95,680);
  locY8 = random(95,680);
  locY9 = random(95,680);
  locY10 = random(95,680);
  locX1 = random (1100,1600);
  locX2 = random (1100,1600);
  locX3 = random (1100,1600);
  locX4 = random (1100,1600);
  locX5 = random (1100,1600);
  locX6 = random (-900,-400);
  locX7 = random (-900,-400);
  locX8 = random (-900,-400);
  locX9 = random (-900,-400);;
  locX10 = random (-900,-400);
  changeX1 = random (-1,-3);
  changeX2 = random (-1,-3);
  changeX3 = random (-1,-3);
  changeX4 = random (-1,-3);
  changeX5 = random (-1,-3);
  changeX6 = random (1,3);
  changeX7 = random (1,3);
  changeX8 = random (1,3);
  changeX9 = random (1,3);
  changeX10 = random (1,3);
  expression = 2;
  noCursor();
}

function preload() {
  background = loadImage('https://raw.githubusercontent.com/ADennedy/images/main/background.png')
  fish1 = loadImage('https://raw.githubusercontent.com/ADennedy/images/main/fishL.png');
  fish2 = loadImage('https://raw.githubusercontent.com/ADennedy/images/main/fishL.png');
  fish3 = loadImage('https://raw.githubusercontent.com/ADennedy/images/main/fishL.png');
  fish4 = loadImage('https://raw.githubusercontent.com/ADennedy/images/main/fishR.png');
  fish5 = loadImage('https://raw.githubusercontent.com/ADennedy/images/main/fishR.png');
  trash1 = loadImage('https://raw.githubusercontent.com/ADennedy/images/main/bag.png');
  trash2 = loadImage('https://raw.githubusercontent.com/ADennedy/images/main/batte.png');
  trash3 = loadImage('https://raw.githubusercontent.com/ADennedy/images/main/bottle.png');
  trash4 = loadImage('https://raw.githubusercontent.com/ADennedy/images/main/brush.png');
  trash5 = loadImage('https://raw.githubusercontent.com/ADennedy/images/main/can.png');
  neutral = loadImage('https://raw.githubusercontent.com/ADennedy/images/main/neu.png');
  happy = loadImage('https://raw.githubusercontent.com/ADennedy/images/main/hap.png');
  mad = loadImage('https://raw.githubusercontent.com/ADennedy/images/main/mad.png');
  hand = loadImage('https://raw.githubusercontent.com/ADennedy/images/main/hand.png');
}

function draw() {
  // put drawing code here
  image(background, 0, 0);
  if (expression==2){
    image(neutral, 63, 732);
  }
  if (expression==1){
    image(mad, 63, 732);
  }
  if (expression==3){
    image(happy, 63, 732);
  }
  image(fish1, locX1, locY1);
  image(fish2, locX2, locY2);
  image(fish3, locX3, locY3);
  image(trash1, locX4, locY4);
  image(trash5, locX5, locY5);
  image(fish4, locX6, locY6);
  image(fish5, locX7, locY7);
  image(trash2, locX8, locY8);
  image(trash3, locX9, locY9);
  image(trash4, locX10, locY10);
  locX1 = locX1 + changeX1;
  locX2 = locX2 + changeX2;
  locX3 = locX3 + changeX3;
  locX4 = locX4 + changeX4;
  locX5 = locX5 + changeX5;
  locX6 = locX6 + changeX6;
  locX7 = locX7 + changeX7;
  locX8 = locX8 + changeX8;
  locX9 = locX9 + changeX9;
  locX10 = locX10 + changeX10;
  image(hand, mouseX, mouseY,60,75);
}

function mouseClicked (){
  if (mouseX<locX1+307 && mouseX>locX1 && mouseY<locY1+115 && mouseY>locY1){
    expression=1;
    changeX1=-2000;
  }
  if (mouseX<locX2+307 && mouseX>locX2 && mouseY<locY2+115 && mouseY>locY2){
    expression=1;
    changeX2=-2000;
  }
  if (mouseX<locX3+307 && mouseX>locX3 && mouseY<locY3+115 && mouseY>locY3){
    expression=1;
    changeX3=-2000;
  }
  if (mouseX<locX4+275 && mouseX>locX4 && mouseY<locY4+241 && mouseY>locY4){
    expression=3;
    changeX4=-2000;

  }
  if (mouseX<locX5+148 && mouseX>locX5 && mouseY<locY5+124 && mouseY>locY5){
    expression=3;
    changeX5=-2000;
  }
  if (mouseX<locX6+307 && mouseX>locX6 && mouseY<locY6+115 && mouseY>locY6){
    expression=1;
    changeX6=2000;
  }
  if (mouseX<locX7+307 && mouseX>locX7 && mouseY<locY7+115 && mouseY>locY7){
    expression=1;
    changeX7=2000;
  }
  if (mouseX<locX8+40 && mouseX>locX8 && mouseY<locY8+78 && mouseY>locY8){
    expression=3;
    changeX8=2000;
  }
  if (mouseX<locX9+144 && mouseX>locX9 && mouseY<locY9+128 && mouseY>locY9){
    expression=3;
    changeX9=2000;
  }
  if (mouseX<locX10+132 && mouseX>locX10 && mouseY<locY10+103 && mouseY>locY10){
    expression=3;
    changeX10=2000;
  }
 }
