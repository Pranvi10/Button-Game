//Button Game
  var x= 25;
  var y= 25;
  var str;
  var w;
  var h;
  var score = 0;

function setup() {  
  createCanvas(windowWidth, windowHeight);
  str='CLICK HERE!';
  frameRate(1);
} 

function draw() {  
  w = random(50,100);
  h = w;
  background(0);
  noStroke();
  rectMode(CENTER);
  fill(255,0,0);
  rect(x,y,50,50)
  fill(0)
  text(str, x+7, y+7,50,50)
}

function mousePressed(){
  if(mouseX> x-w/2 && mouseX< x+w/2 && mouseY> y-h/2 && mouseY< y+h/2) {
    x=random(width)
    y=random(height)
    w = random(50,100);
    h = w;
    stroke(4);
    fill("white");
    text("Score: " + score, windowWidth/2, windowHeight/2);
    score ++
  }
}