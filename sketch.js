var hour
var minuite
var second





function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}
  hr=hour()
  text('Current hour:\n' + hr, 5, 50);
  angleMode(DEGREES);
  hrAngle=map(hr,0,60,0,360)
  mn=minuite()
 text('Current minute: \n' + mn, 5, 50);
 angleMode(DEGREES);
 mnAngle=map(mn,0,60,0,360)
    sc=second()
    text('Current second: \n' + sc, 5, 50);
    angleMode(DEGREES);
    scAngle=map(sc,0,60,0,360)
  
  
  

function draw() {
  background(255,255,255);  
 
  let hr
  hr = map(mouseX, 0, width, 0, 175);
  // Scale the mouseX value from 0 to 640 to a range between 40 and 300
  let mn = map(mouseX, 0, width, 40, 300);
  fill(255, mn, 0);
  ellipse(width/2, height/2, mn, mn);
 
 
 
 
 stroke(255,0,0)
 strokeWeight(7)
 line(0,0,100,0)
 arc(50, 55, 50, 50, 0, HALF_PI);
noFill();
arc(50, 55, 60, 60, HALF_PI, PI);
arc(50, 55, 70, 70, PI, PI + QUARTER_PI);
arc(50, 55, 80, 80, PI + QUARTER_PI, TWO_PI);
 
 
 
 
 
  drawSprites();
}