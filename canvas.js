var canvas = document.getElementById('canvas1');
canvas.width = innerWidth;
canvas.height = innerHeight;

var c = canvas.getContext('2d');
c.lineWidth = 4;

function Circle(x, dx, y, dy, radius, color){
    this.x = x;
    this.dx = dx;
    this.y = y;
    this.dy = dy;
    this.r = radius;

    this.draw = function(){
        c.beginPath();
        c.strokeStyle = color;
        c.arc(this.x, this.y, this.r,0,Math.PI*2, false);
        c.stroke();
    }

    this.update = function(){
        if(this.x >= innerWidth-radius || this.x <= radius){
            this.dx = -this.dx;
        }
        if(this.y >= innerHeight-radius || this.y <= radius){
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;
        this.draw();
    }
}

// Create multiple circles
var colors = ['Red' ,'Pink' ,'Purple' ,'Deep Purple', 'Indigo', 'Blue', 'Cyan', 'Aqua', 'Teal', 'Green', 'Light Green', 'Lime', 'Sand', 'Khaki', 'Yellow', 'Amber', 'Orange'];
var circleArray = [];
for(var i = 0; i < 100; i++){
    var radius = 50;
    var x = Math.random()*(innerWidth-2*radius) + radius;
    var y = Math.random()*(innerHeight-2*radius) + radius;
    var dx = Math.random()*4;
    var dy = Math.random()*4;
    var color = colors[Math.floor((Math.random() * 16))];
    var circle = new Circle(x, dx, y, dy, radius, color)
    circleArray.push(circle);
}

console.log(circleArray);


function animate(){
    c.clearRect(0,0,innerWidth,innerHeight);
    c.fillStyle = "rgba(0,255,0,0.2)"
    c.fillRect(0,0,innerWidth,innerHeight);
    for(var i = 0; i < circleArray.length; i++){
        circleArray[i].update();
    }
    requestAnimationFrame(animate);
}

animate();