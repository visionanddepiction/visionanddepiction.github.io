var nim,nimtext;
var t=0;
var step=0.005;

function setup() {
  createCanvas(windowWidth, windowHeight);
  nim = loadImage('nim.png');
  nimtext = loadImage('nimwatching.jpg');
  background(0);
}

function draw() {
  
  x=windowWidth/4+windowWidth*(noise(t,0,0)-.5);
  y=windowHeight/4+windowHeight*(noise(0,t,0)-.5);
  
  image(nim,x,y)
  
  
  t=t+step;
  
  image(nimtext,0,height-nimtext.height)
}

function windowResized() {
  if(windowWidth<maxCanvasWidth){
    resizeCanvas(windowWidth, windowHeight);
  }else{
    resizeCanvas(maxCanvasWidth, windowHeight);
  }
}

function mouseClicked() {
  step=step*2;
  if(step>2){step=0.005;}
}
