//Virtual Druid
let myths = [];
let i = 0;
let j = 0;
let mythFont;
let y = 50;

let alp1 = 0;
let alp2 = 0;
let alp3 = 0;
let alp4 = 0;
let alp5 = 0;

let slides = [];
let slide = 0;

//neuralNet
let x1;
let y1 = 250;
let x2;
let y2 = 200;
let x3;
let y3 = 350;
let x4;

function preload(){
  //Virtual Druid
  mythFont = loadFont('data/RobotoMono-VariableFont_wght.ttf')
  myths = loadStrings('data/text_2.txt');
  
  for (let i = 0; i < 13; i++){
    slides[i]= loadImage("data/WhatIsAi_"+ i + ".jpg");
  }
}
function setup() {
  createCanvas(windowWidth-50, windowHeight-50);
  colorMode(HSB, 360, 100, 100, 100);
  i = int(random(myths.length));
  background(0);
  frameRate(10);
  textFont('Monaco');
  
  //neuralNet
  x1 = width*.2;
  x2 = width/2;
  x3 = width*.8;
  x4 = width*.33;
  
}

function draw() {
  background(0, 1);
  fill(100, 100, 100);
  textSize(random(40,60));
  textWrap(WORD);
  textAlign(CENTER);
  
  if (frameCount%50==0){
    rectMode(CORNER);
    text(myths[i], 0, y, width);
    i = int(random(myths.length)); 
    y = y + 100; 
  }
  if (y > height - 100){
    y = 50;
  }

  //rect  
  rectMode(CENTER);
  noStroke();
  fill(50, alp1);
  rect(width/2, height/2, width*.75, height*.75) 
  //slide
  imageMode(CENTER); 
  tint(255, alp2);
  image(slides[slide], width/2, height/2, width*.75, height*.75);
  
  push();
  translate(25, 40);

  perceptron();
  simpleNeuron();
  complexNeuron();
  pop();
  
}



function mousePressed() {
    let fs = fullscreen();
    fullscreen(!fs);
  }

  function windowResized(){
    resizeCanvas(windowWidth-50, windowHeight-50);
  }
2
  function keyTyped(){
    //change alpha channel of slide
    if(key == "1"){
      if (alp1 == 0){
      alp1 = 100
       } else  if (alp1 == 100){
        alp1 = 0
       }
    }
    //make image visible
    if(key == "2"){
      if (alp2 == 0){
      alp2 = 100
       } else  if (alp2 == 100){
        alp2 = 0
       }
    }

    //neural nets
    if(key == "3"){
      if (alp3 == 0){
      alp3 = 100
       } else  if (alp3 == 100){
        alp3 = 0
       }
    }
    if(key == "4"){
      if (alp4 == 0){
      alp4 = 100
       } else  if (alp4 == 100){
        alp4 = 0
       }
    }
    if(key == "5"){
      if (alp5 == 0){
      alp5 = 100
       } else  if (alp5 == 100){
        alp5 = 0
       }
    }
  }

  function keyPressed(){
    if (keyCode === RIGHT_ARROW){
      slide++;
    }
    if (keyCode === LEFT_ARROW){
      slide--;
    }
    if (slide >= 12){
      slide = 12;
    }
    if (slide <= 0){
      slide = 0;
    }
  }

  function perceptron(){
    stroke(0, alp3);
    for (let i = 0; i < 3; i++){
      line(x1+random(10) , y1+(i*200)+random(10), width*.5+random(10), height/2+j*200+random(10))
      strokeWeight(random(4));
      fill(0, 100, 100, alp3);
      ellipse(x1, y1+i*200, 50, 50);
      fill(240, 100, 100, alp3);
      strokeWeight(3);
      line(width/2, height/2, width*.75, height/2);
      ellipse(width*.5, height/2, 50, 50);
    }
    strokeWeight(3);
    fill(0, alp3);
    ellipse(width*.75, height/2, 20, 20);
  }

  function simpleNeuron(){
    stroke(0, alp4);
    for (let i = 0; i < 5; i++){
      for (let j = 0; j < 7; j++){
        strokeWeight(random(4))
        line(x1+random(10) , y1+(i*100)+random(10), x2+random(10), y2+j*100+random(10))
       
      }
      fill(0, 100, 100, alp4);  
      ellipse(x1, y1+i*100, 50, 50);
    }
  
    // output
    for (let i = 0; i < 4; i++){
      for (let j = 0; j < 7; j++){
        strokeWeight(random(4))
        line(x3+random(10), y3+(i*100)+random(10), x2+random(10), y2+(j*100)+random(10))
      }
      fill(240, 100, 100, alp4);  
      ellipse(x3, y3+i*100, 50, 50);
    }
  
    //hidden
    for (let i = 0; i < 7; i++){
      fill(90, random(100), random(100), alp4);
      ellipse(x2, y2+i*100, 50, 50);
      }
    }
  
    function complexNeuron(){
      stroke(0, alp5);
      //input
      for (let i = 0; i < 5; i++){
        for (let j = 0; j < 7; j++){
          strokeWeight(random(4));
          line(x1+random(10) , y1+(i*100)+random(10), x4+random(10), y2+j*100+random(10))
         
        }
        fill(0, 100, 100, alp5);  
        ellipse(x1, y1+i*100, 50, 50);
      }
    
      //output
      for (let i = 0; i < 4; i++){
        for (let j = 0; j < 7; j++){
          strokeWeight(random(4));
          line(x3+random(10), y3+(i*100)+random(10), x4+600+random(10), y2+j*100+random(10))
        }
        fill(240, 100, 100, alp5);  
        ellipse(x3, y3+i*100, 50, 50);
      }
    
      //hidden layer
      
          for (let i = 0; i < 7; i++){
            for (let k = 0; k < 7; k++){ 
              strokeWeight(random(4));
            line(x4+random(10), y2+(k*100)+random(10), x4+300+random(10), y2+i*100+random(10))
            line(x4+300+random(10), y2+(k*100)+random(10), x4+600+random(10), y2+i*100+random(10))
            }
          }
    
            for (let j = 0; j < 3; j++){
              for (let i = 0; i < 7; i++){
            fill(90, random(100), random(100), alp5);
            ellipse(x4+(j*300), y2+(i*100), 50, 50);
        
        }
      }
    }