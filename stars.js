class Star {
	constructor(){
    this.x = Math.random();
		this.ox = 0.5;
    this.oy = (Math.random()*0.7);
		this.y = this.oy + 0.1*Math.pow(this.x-this.ox,2);
		this.s = Math.random()*4+2;
  }

	show(width,height){
		stroke(255);
		strokeWeight(this.s);
		point(width*this.x,height*this.y)
	}

	moveLeft(){
		this.x = this.x-0.0001;
		this.y = this.oy + 0.1*Math.pow(stars[0].x-stars[0].ox,2);
	}
}

var stars = [];
for (var i = 0; i < 100; i++) {
    stars[i] = new Star();
}
var canvas;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index','-1');
	background(50,45,75);
}

function draw() {
	background(50,45,75);
	for (let star of stars){
		star.show(windowWidth, windowHeight);
		star.moveLeft();
	}
  fill(50);
	noStroke();
	rect(0, 0.75*windowHeight, windowWidth, 0.25*windowWidth);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
