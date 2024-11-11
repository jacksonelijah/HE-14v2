function setup() {
  createCanvas(windowWidth, windowHeight);
  background(random(255), random(255), random(255));  
}

function draw() {
  
}

function drawRandomRectangle() {
  let x = random(width);
  let y = random(height);
  let w = random(50, 150);
  let h = random(50, 150);
  fill(random(255), random(255), random(255)); 
  noStroke();
  rect(x, y, w, h);
}


function drawRandomLine() {
  let x1 = random(width);
  let y1 = random(height);
  let x2 = random(width);
  let y2 = random(height);
  stroke(random(255), random(255), random(255)); 
  strokeWeight(random(1, 5));
  line(x1, y1, x2, y2);
}


function clearCanvas() {
  background(random(255), random(255), random(255)); 
}
