
var w = window.innerWidth;
var h = window.innerHeight;  

let slider;

function setup() {

  canvas=createCanvas(w, h);

  colorMode(HSB);
  slider = createSlider(0, 360, 60, 40);
  slider.position(250, h/2+320);
  slider.style('width', '100px');

}

function draw() {

  background(250);


  let val = slider.value();
  background(val, 50, 90, 50);


/////////////////////////////////////// DRAW GRID BACKGROUND
beginShape();
fill(0);
stroke(1);
strokeWeight(0.2);

/////////////////////////////////////// VERTICAL ARRAY
for(let i=0; i < w; i++) {
  let lineX = 17 + i*40;
  line(lineX, 0, lineX, 640);
}

/////////////////////////////////////// HORIZONTAL ARRAY
for(let j=0; j < 17; j++) {
  let lineY = j * 40;
  line(0, lineY, w, lineY);
}

endShape();

fill(250);
stroke(0);
strokeWeight(mouseX/22);

/////////////////////////////////////// DRAW DOT LETTERS (with functions)
drawletter_f();
drawletter_u();
drawletter_s();
drawletter_i();
drawletter_o();
drawletter_n();

//RESET
fill(0);
stroke(250);
strokeWeight(1.4);
textSize(17);

//TYPED TEXT

textAlign(LEFT, BOTTOM);
text('BACKGROUND COLOR', w/40, h/2+290, width);

textAlign(LEFT, BOTTOM);
text('MOVE CURSOR LEFT OR RIGHT TO ADJUST SIZE', w/40+460, h/2+290, w);

textAlign(LEFT, BOTTOM);
text('[ FUSION ] IS A GENERATIVE TYPE TOOL', w/40+1029, h/2+290, w);
}

function windowResized() {
  resizeCanvas(w, h);
}

///////////////////////////////////// DRAW LETTER F
function drawletter_f() {
  //letter F
  ellipse(w/19+81, 220, 25, 25);
  ellipse(w/19+81, 260, 25, 25);
  ellipse(w/19+81, 300, 25, 25);
  ellipse(w/19+81, 340, 25, 25);
  ellipse(w/19+81, 380, 25, 25);
  //E-horizontal-bar-top
  ellipse(w/19+122, 220, 25, 25);
  ellipse(w/19+162, 220, 25, 25);
  ellipse(w/19+202, 220, 25, 25);
  //E-horziontal bar-middle
  ellipse(w/19+122, 300, 25, 25);
  ellipse(w/19+162, 300, 25, 25);
  ellipse(w/19+202, 300, 25, 25);
}

///////////////////////////////////// DRAW LETTER U
function drawletter_u() {
  // noLoop();

  //U-vertical-left
  ellipse(w/19+282, 220, 25, 25);
  ellipse(w/19+282, 260, 25, 25);
  ellipse(w/19+282, 300, 25, 25);
  ellipse(w/19+282, 340, 25, 25);
  // ellipse(w/19+202, 380, 25, 25);
  //U-horizontal-right
  ellipse(w/19+322, 380, 25, 25);
  ellipse(w/19+362, 380, 25, 25);
  ellipse(w/19+402, 380, 25, 25);
  //U-vertical-right
  ellipse(w/19+442, 220, 25, 25);
  ellipse(w/19+442, 260, 25, 25);
  ellipse(w/19+442, 300, 25, 25);
  ellipse(w/19+442, 340, 25, 25);
  // ellipse(w/19+362, 380, 25, 25);
}

///////////////////////////////////// DRAW LETTER S
function drawletter_s() {
  //letter S
    //S-horizontal-top
    ellipse(w/19+522, 220, 25, 25);
    ellipse(w/19+562, 220, 25, 25);
    ellipse(w/19+602, 220, 25, 25);
    ellipse(w/19+642, 220, 25, 25);
    //S-vertical-top
    ellipse(w/19+522, 260, 25, 25);
    ellipse(w/19+522, 300, 25, 25);
     //S-horizontal-mid
    ellipse(w/19+562, 300, 25, 25);
    ellipse(w/19+602, 300, 25, 25);
    ellipse(w/19+642, 300, 25, 25);
    //S-vertical-bottom
    ellipse(w/19+642, 340, 25, 25);
    ellipse(w/19+642, 380, 25, 25);
    //S-horizontal-bottom
    ellipse(w/19+602, 380, 25, 25);
    ellipse(w/19+562, 380, 25, 25);
    ellipse(w/19+522, 380, 25, 25);
  }



///////////////////////////////////// DRAW LETTER I
function drawletter_i() {
//letter I
  ellipse(w/19+722, 220, 25, 25); 
  ellipse(w/19+722, 260, 25, 25); 
  ellipse(w/19+722, 300, 25, 25);  
  ellipse(w/19+722, 340, 25, 25);
  ellipse(w/19+722, 380, 25, 25);
}

///////////////////////////////////// DRAW LETTER O
function drawletter_o() {
//letter O
  //O-horizontal-top
  ellipse(w/19+842, 220, 25, 25);
  ellipse(w/19+880, 220, 25, 25);
  ellipse(w/19+920, 220, 25, 25);
  //O-vertical-left
  ellipse(w/19+802, 260, 25, 25);
  ellipse(w/19+802, 300, 25, 25);
  ellipse(w/19+802, 340, 25, 25);
  //O-horizontal-bottom
  ellipse(w/19+842, 380, 25, 25);
  ellipse(w/19+880, 380, 25, 25);
  ellipse(w/19+920, 380, 25, 25);
  //O-vertical-right
  ellipse(w/19+960, 260, 25, 25);
  ellipse(w/19+960, 300, 25, 25);
  ellipse(w/19+960, 340, 25, 25);
}

///////////////////////////////////// DRAW LETTER N
function drawletter_n() {
  //letter N
  //diagnol
  ellipse(w/19+1040, 220, 25, 25);
  ellipse(w/19+1080, 260, 25, 25);
  ellipse(w/19+1120, 300, 25, 25);
  ellipse(w/19+1160, 340, 25, 25);
  //E-vertical-left
  ellipse(w/19+1040, 260, 25, 25);
  ellipse(w/19+1040, 300, 25, 25);
  ellipse(w/19+1040, 340, 25, 25);
  ellipse(w/19+1040, 380, 25, 25);
  //E-vertical-right
  ellipse(w/19+1200, 220, 25, 25);
  ellipse(w/19+1200, 260, 25, 25);
  ellipse(w/19+1200, 300, 25, 25);
  ellipse(w/19+1200, 340, 25, 25);
  ellipse(w/19+1200, 380, 25, 25);
}








