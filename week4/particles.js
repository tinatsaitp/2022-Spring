//Source: https://www.youtube.com/watch?v=OIfEHD3KqCg
//Source: https://www.youtube.com/watch?v=UcdigVaIYAk

let particles = [];
var canvas;

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight); 
  canvas.position(0, 0);
  canvas.style('z-index', '-10')
}


function draw() {
  background(232, 252, 255); //color of the canvas
  let p = new Particle();
  particles.push(p); //add objects to the array
  
  for (let i = particles.length-1; i >= 0; i--) {
    particles[i].update();
    particles[i].show();
    if (particles[i].finished()){
        particles.splice(i, 1);
        }
  }
}

class Particle {
  
  constructor() {
    this.x= mouseX;
    this.y= mouseY;
    this.vx = random(-3, 3);
    this.vy = random(-10, -5);
    this.alpha = 255;
}

finished() {
  return this.alpha < 10;
}
  
update() {
  this.x += this.vx;
  this.y += this.vy;
  this.alpha -= 8;
}

  show() {
    noStroke();
    fill(255, 244, 186, this.alpha);
    ellipse(this.x, this.y, 15);
  }
}