//make a background of flowers

class Flower{
	constructor() {
		this.xpp = random(0.1,0.9);
		this.ypp = random(0.1,0.9);
		this.c = color(random(30,255),random(30,255),random(30,255),90);
		this.fatness = round(random(10,50));
		this.size = round(random(30,100));
		this.offset = round(random(10,this.size/2));
	}

	show() {
		push();
		fill(this.c);
		translate(this.xpp*windowWidth,this.ypp*windowHeight);
		noStroke();
		for (var i = 0; i < 10; i ++) {
			ellipse(0, this.offset, this.fatness, this.size);
    	rotate(PI/5);
		}
		fill(255, 204, 0,120);
		ellipse(0,0,this.size/4,this.size/4);
		pop();
	}
}

let flwrs = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
	for (let i = 0; i<100; i++){
		flwrs[i] = new Flower();
	}
}

function draw() {
  background('#545454');
	for (let flwr of flwrs){
		flwr.show()
	}
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
