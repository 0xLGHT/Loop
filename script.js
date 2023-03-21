let angle = 100;
let maxPoints = 600;
let scaleFactor = 150;
let stepSize = 20; // You can adjust this value to control the speed of the spinning circle
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

    line(0, 0, x, y);

    angle += stepSize;
  }
}
