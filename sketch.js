let myths = [];
let i = 0;
let mythFont;
let y = 20;

function preload(){
  mythFont = loadFont('data/RobotoMono-VariableFont_wght.ttf')
  myths = loadStrings('data/text_1.txt')
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
  i = int(random(myths.length));
  background(0);
  frameRate(10);
  textFont(mythFont);
}

function draw() {
  background(0, 1);
  fill(100, 100, 100);
  textSize(random(10,30));
  textAlign(CENTER);
  if (frameCount%20==0){
    text(myths[i], width/2, y);
    i = int(random(myths.length)); 
    y = y + 30; 
  }
  if (y > height - 20){
    y = 20;
  }
}
