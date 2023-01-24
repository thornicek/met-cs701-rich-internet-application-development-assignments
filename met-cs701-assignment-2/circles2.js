document.addEventListener('DOMContentLoaded',()=>{
    //Access canvas and context
    var canvas = document.getElementById("circleCanvas");
    var context = canvas.getContext("2d");
    let circleLst = [];
    //Implement click handler
    canvas.onclick= function(e){
        context.clearRect(0, 0, canvas.width, canvas.height);
        var pos = getMousePos(canvas, e);
        var circle = new Circle(pos.x, pos.y,30,randomColor());
        for (const element of circleLst){
            if (overlaps(element,circle)){
                element.visible = false;
            }
        }
        circleLst.push(circle);
        circleLst = circleLst.filter(is_visible);
        for (const element of circleLst){
          element.draw(context);

        }
    }
});


//Generate randomColor
function randomColor(){
   const generateColor = Math.floor(Math.random()*16777215).toString(16);
   const hexNumber = "#" + generateColor;
   return hexNumber;
}
function is_visible(circle){
    return circle.visible;
}

function getMousePos(canvas,evt){
    var rect = canvas.getBoundingClientRect();
    return{
        x: evt.clientX - rect.left,
        y: evt.clientY -rect.top
    };
}
class Circle {
    constructor(centerX, centerY, radius, color) {
      this.visible = true;
      this.color = color;
      this.centerX = centerX;
      this.centerY = centerY;
      this.radius = radius;
    }
  
    draw(context) {
      context.beginPath();
      context.arc(this.centerX, this.centerY, this.radius, 0, 2 * Math.PI, false);
      context.fillStyle = this.color;
      context.fill();
    }
  }
function overlaps(circle1,circle2){
    if (distance(circle1,circle2)<(circle1.radius + circle2.radius)){
        return true;
    }
    return false;
}
function distance(circle1,circle2){
    xDistance = circle2.centerX- circle1.centerX;
    xDistance = xDistance * xDistance;

    yDistance = circle2.centerY- circle1.centerY;
    yDistance = yDistance * yDistance;

    sum= xDistance + yDistance;
    sum = Math.sqrt(sum);
    return sum;
}