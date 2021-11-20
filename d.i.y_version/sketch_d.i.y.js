var w = window.innerWidth;
var h = window.innerHeight; 

var x = [];
var y = [];
let slider;
let n;
let ww;
var shape = [];
var shape1 = [];

function setup() {
    canvas=createCanvas(w, h);
    
    slider = createSlider(20, 60, 40, 20);
    slider.position(-50, -50);
    slider.style('width', '100px');   
}

function draw() {
    background(255);
    rectMode(CORNER);
    
    
    var val = slider.value();         
/////////////////////////////////////// GRID SETTING
    // if (val == 40) {
    //   n = 40;
    //   ww = 45; }
    if (val == 40) {
      n = 40;
      ww = 41; }
    // if (val == 60) {
    //   n = 20; 
    //   ww = 72; }
  
    for (var i = 0; i < n; i++) {
        x[i] = i * ww;
        y[i] = i * ww;
    }
    for (var j = 0; j < n; j ++) {
    for (var i = 0; i < n; i ++) {
      
    var dis = dist(mouseX, mouseY, x[i]+ww/2, y[j]+ww/2);        
    if(dis < ww/2){
    this.isOverRectangle = true;
    } else {
    this.isOverRectangle = false;
    }
/////////////////////////////////////// COLOR OF SQUARES DURING HOVER
    if(this.isOverRectangle === true)
    {
    fill('rgba(202, 202, 202, 0.5)');
    } else {
    noFill(); 
    }
  
      stroke(1);
      strokeWeight(0.2);
      rect(x[i], y[j], ww, ww);
    }
  }
  
    noStroke();
    
/////////////////////////////////////// CIRCLES WHEN MOUSE IS PRESSED
    for (var j = 0; j < n; j ++) {
        for (var i = 0; i < n; i ++) {
          push();
         
          if (shape1[j * n + i]) this.fill("black").circle((x[i]+ww/2), (y[j]+ww/2), ww/2, ww/2);
            
          if (shape[j * n + i]) {
            
    
            if (key === '2') {
              this.fill("black").circle((x[i]+ww/2), (y[j]+ww/2), ww, ww);
              shape1 = false;
            }
            if (key === '3') {
              this.fill("black").circle((x[i]+ww/2), (y[j]+ww/2), 60, 60);
              shape1 = false;
            }
            if (key === '4') {
              this.fill("black").circle((x[i]+ww/2), (y[j]+ww/2), 80, 80);
              shape1 = false;
            }
            if (key === '5') {
              this.fill("black").circle((x[i]+ww/2), (y[j]+ww/2), 120, 120);
              shape1 = false;
            }
            if (key === '1') {
              this.fill("black").circle((x[i]+ww/2), (y[j]+ww/2), ww/2, ww/2);
              // this.fill("white").circle((x[i]+ww/2), (y[j]+ww/2), w/3*2, ww/2);
              shape1 = false;
            }
            
             }
            else this.fill("white");
           
            pop();
             }
          }
      }

function mousePressed() {
    for (var j = 0; j < n; j++) {
        for (var i = 0; i < n; i++) {
          var dis = dist(mouseX, mouseY, x[i]+ww/2, y[j]+ww/2);
            if(dis < ww/2) {
              shape[j*n + i] =! shape[j*n + i];
              shape1[j * n + i] =! shape1[j * n + i];
            } 
        }
    }
}

function keyPressed() {
////// CLEAR CANVAS
  if (keyCode === BACKSPACE) {
      shape = [];
      shape1 = [];
    }
    
////// SAVE LETTER
  if (keyCode === RETURN) {
		let saveLetter = get (0, 0, w, h)
    saveLetter.save('myletter_fusion.png');
  }
}

function windowResized() {
  resizeCanvas(w, h);
}


