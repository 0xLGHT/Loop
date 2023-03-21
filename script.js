let angle = 100;
let maxPoints = 500;
let scaleFactor = 75;
let stepSize = 0.05;
let centerX;
let centerY;

function setup() {
  createCanvas(800, 800);
  centerX = width / 2;
  centerY = height / 2;
  background(0);
  strokeWeight(1);
}

function draw() {
  background(0, 0, 0, 25);

  translate(centerX, centerY);

  stroke(255, 100);
  for (let i = 0; i < maxPoints; i++) {
    let x = sin(angle) * scaleFactor;
    let y = cos(angle) * scaleFactor;

    let offsetX = sin(angle * 2) * scaleFactor * 1.5;
    let offsetY = cos(angle * 2) * scaleFactor * 1.5;

    let x2 = x + offsetX;
    let y2 = y + offsetY;

    line(x, y, x2, y2);

    angle += stepSize;
  }
}
