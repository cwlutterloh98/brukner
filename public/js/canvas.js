var canvas  = document.querySelector('.canvas');
var canvasWidth = window.innerWidth;
var canvasHeight = window.innerHeight;

// set height and width of canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// setup variables to find the exact center of the canvas
var centerWidth = (canvasWidth / 2);
var centerHeight = (canvasHeight / 2) - 200;
context = canvas.getContext('2d');

// https://codepen.io/audeficheux/pen/QjewEa?editors=1010
// pen by 
// ROUND EAST WEST NORTH SOUTH COMPASS

function drawCircles() {

	// CIRCLES COMPASS
	context.beginPath();
	context.lineWidth = 3;
	context.strokeStyle = '#54877f';
	context.arc(115, 225, 102, 0, 2*Math.PI);
	context.stroke();
	context.beginPath();
	context.arc(115, 225, 67.5, 0, 2*Math.PI);
    context.stroke();
    
}
    // BIG NEEDLES 
    function drawNeedles() {

        /*Red*/
        context.beginPath();
        context.fillStyle = '#e14555'
        context.moveTo(115,90);
        context.lineTo(100,210);
        context.lineTo(115,225);
        context.lineTo(115,90);
        context.fill();
        context.beginPath();
        context.fillStyle = '#ef546c'
        context.moveTo(115,90);
        context.lineTo(115,225);
        context.lineTo(130,210);
        context.lineTo(115,90);
        context.fill();
        
        /*Green*/
        context.beginPath();
        context.fillStyle = '#92b894'
        context.moveTo(115,360);
        context.lineTo(130,240);
        context.lineTo(115,225);
        context.lineTo(115,360);
        context.fill();
        context.beginPath();
        context.fillStyle = '#49796a'
        context.moveTo(115,360);
        context.lineTo(115,225);
        context.lineTo(100,240);
        context.lineTo(115,360);
        context.fill();
    }
    var shape = {width: 115, height: 225}
    var rotatespeed = 0.002 * Math.PI;
    var rotatespace;
    function rotate() {

        context.translate(shape.width,shape.height);
        context.rotate(rotatespeed);
        context.translate(-shape.width,-shape.height);

      }

    function animate() {
        requestAnimationFrame(animate);
        // clear the board
        context.clearRect(0, 0, canvasWidth, canvasHeight);

          // Move registration point to the center of the canvas

        rotate();
        rotatespace -= rotatespace
        drawCircles();
        drawNeedles();
    }
    animate();    