var s;
var scl = 15;
var food;

function setup() {
    createCanvas(scl*30,scl*30);
    s = new Snake();
    frameRate(7);
    pickLocation();
}

function pickLocation() {
    var cols = floor(width/scl);
    var rows = floor(height/scl);
    food = createVector(floor(random(cols)),floor(random(rows)));
    food.mult(scl);
    frameRate(7+floor(0.3*s.total))
}

function draw() {
    background(51);
    s.death();
    s.update();
    s.show();

    if (s.eat(food)) {
        pickLocation();
    }

    fill(255, 0, 100);
    rect(food.x, food.y, scl, scl);
}

function keyPressed() {
    if (keyCode == UP_ARROW) {
        s.dir(0, -1);
    } else if (keyCode == DOWN_ARROW) {
        s.dir(0, 1);
    } else if (keyCode == RIGHT_ARROW) {
        s.dir(1, 0);
    }else if (keyCode == LEFT_ARROW) {
        s.dir(-1, 0);
    }
}
