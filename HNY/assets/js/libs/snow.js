var c = new Sketch.create({ autoclear: false, autopause: false }),
    flakes = [],
    flakeCount = 800;

var Flake = function() {
    this.init();
}
Flake.prototype.init = function() {
    this.radius = random(1, 4);
    this.x = random(0, c.width);
    this.y = random(-this.radius, -c.height);
    this.dX = random(-0.2, 0.2);
    this.dY = this.radius / 2;
}
Flake.prototype.update = function() {
    this.x += this.dX;
    this.y += this.dY;
    this.dX += max(-0.25, min(0.25, random(-1, 1) / 20));
    if (this.y >= c.height) {
        this.init();
    }
}
Flake.prototype.draw = function() {
    c.fillStyle = '#fff';
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, TWO_PI);
    c.fill();
    c.closePath();
}
c.setup = function() {
    for (var i = 0; i < flakeCount; i++) {
        flakes.push(new Flake());
    }
}
c.update = function() {
    var i = flakeCount;
    while (i--) {
        flakes[i].update();
    }
}
c.draw = function() {
    var i = flakeCount;
    c.clearRect(0, 0, c.width, c.height);
    while (i--) {
        flakes[i].draw();
    }
}
