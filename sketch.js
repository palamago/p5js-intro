var d = 50,
  grow = true,
  gap = 5,
  border = 5,
  w,h,
  ix = 0,
  arcs = [];

var offsetY = 300,
  offsetX = 100;

function setup() {
  w=windowWidth;
  h=windowHeight;
  var ix = 0;
  arcs = [
    {from:0,to:HALF_PI},
    {from:HALF_PI,to:PI},
    {from:PI,to:PI+HALF_PI},
    {from:PI+HALF_PI,to:TWO_PI}
  ];

  createCanvas(w,h);
  background(255,255,255);
}


function draw() {

  background(255,99,0);
  strokeWeight(border);
  
  for(var i=0;i<500;i++){
      noStroke();
      fill(random(255));
      ellipse(random(width), random(height), 30, 30);
  }

  if(grow){
    d += gap;
    offsetX += 1;
    offsetY -= 1;
    style1();
    if(d==250){
       grow = false;
    }
  } else {
    d -= gap;
    offsetX -= 1;
    offsetY += 1;
    style2();
    if(d==50){
       grow = true;
    }
  }

  ellipse(w/2, h/2, d, d);

  styleArc();
  arc(w/2, h/2, d+offsetY, d+offsetX, arcs[ix].from, arcs[ix].to);
  arc(w/2, h/2, d+offsetX, d+offsetY, arcs[ix].from, arcs[ix].to);
  ix = (ix==arcs.length-1)?0:ix+1;
  
  triangles();
  
}

function style1(){
    stroke(55,55,55);
    fill(0,200,0);
}

function style2(){
    stroke(255);
    fill(55,55,55);
}

function styleArc(){
    noFill();
    strokeWeight(border*2);
    stroke(0,255,0);
}

function triangles(){
  noStroke();
  fill('rgba(0,0,0,0.5)');
  
  if(mouseX > width/2){
    triangle(0,0,0,height, mouseX, mouseY);
  } else {
    triangle(width,0,width, height, mouseX, mouseY);
  }
  
}

