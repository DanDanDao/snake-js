var s;
var scl = 20;

var food;

$(window).on('load',function(){
	$('#start-modal').modal('show');
});

$('#start-btn').on('click',function (){
	s = new Snake();
	frameRate(10);
	pickLocation();
	s.dir(1, 0);
	s.curdirect = "right"
})	

function setup() {
	createCanvas(600, 600);
	s = new Snake();
	frameRate(10);
	pickLocation();
	s.dir(0, 0);
	s.curdirect = "right"
}

function pickLocation() {
	var cols = floor(width/scl);
	var rows = floor(height/scl);
	food = createVector(floor(random(cols)), floor(random(rows)));
	food.mult(scl);
}

function draw() {
	background(51);
	s.death();
	s.update();
	s.show();

	if (s.eat(food)) {
		pickLocation();
	}

	fill(238, 66, 102);
	rect(food.x, food.y, scl, scl);
}

function keyPressed() {
	if (keyCode === UP_ARROW && s.curdirect != "down") {
		s.dir(0, -1);
		s.curdirect = "up"
	} else if (keyCode === DOWN_ARROW && s.curdirect != "up") {
		s.dir(0, 1);
		s.curdirect = "down"
	} else if (keyCode === RIGHT_ARROW && s.curdirect != "left") {
		s.dir(1, 0);
		s.curdirect = "right"
	} else if (keyCode === LEFT_ARROW && s.curdirect != "right") {
		s.dir(-1, 0);
		s.curdirect = "left"
	}
}
