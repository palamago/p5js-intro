var d = 50,
  grow = true,
  gap = 5,
  border = 5,
  w=600,h=600,
  ix = 0,
  arcs = [];

var offsetY = 300,
  offsetX = 100;

function setup() {
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

  background(255,99,00);
  strokeWeight(border);

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
  
  followLine();
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

function followLine(){
  
  /*strokeWeight(1);
  p1 = {x: 200, y: 200}, p2 = {x: 73, y: 24};
  p3 = {x: 73, y: 61}, p4 = {x: 15, y: 65};
  noFill();
  stroke(255, 102, 0);
  curve(p1.x, p1.y, p1.x, p1.y, p2.x, p2.y, p3.x, p3.y);
  stroke(0);
  curve(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y, p4.x, p4.y);
  stroke(255, 102, 0);
  curve(p2.x, p2.y, p3.x, p3.y, p4.x, p4.y, p4.x, p4.y);*/
}
