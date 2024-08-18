let myths = [];
let i = 0;
let mythFont;
let y = 50;

//CCapture
//var capture = false; // default is to not capture frames, can be changed with button in browser
var capturer = new CCapture({
  format:'webm', 
  workersPath: 'js/',
  framerate: 10
});

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
  if (frameCount==1){
      capturer.start();
    };
  //translate(-width/2, 0)
  background(0, 1);
  fill(100, 100, 100);
  textSize(random(10,50));
  textWrap(WORD);
  textAlign(CENTER);
  if (frameCount%40==0){
    text(myths[i], 0, y, width);
    i = int(random(myths.length)); 
    y = y + 70; 
  }
  if (y > height - 100){
    y = 50;
  }

    capturer.capture(document.getElementById('defaultCanvas0'));  
  if (frameCount==18000){
    save_record();
  }
  print(frameCount);
}

function save_record() {
  capturer.save();
}