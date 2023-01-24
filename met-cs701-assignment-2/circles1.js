document.addEventListener('DOMContentLoaded',()=>{
    //Access canvas and context
    var canvas = document.getElementById("circleCanvas");
    var context = canvas.getContext("2d");

    //Implement click handler
    canvas.onclick= function(e){
        var pos = getMousePos(canvas, e);
        context.fillStyle = randomColor();

        //fill a circle
        context.beginPath();
        context.arc(pos.x, pos.y, 30,0,2*Math.PI);
        context.fill();

    }
});


//Generate randomColor
function randomColor(){
   const generateColor = Math.floor(Math.random()*16777215).toString(16);
   const hexNumber = "#" + generateColor;
   return hexNumber;
}

function getMousePos(canvas,evt){
    var rect = canvas.getBoundingClientRect();
    return{
        x: evt.clientX - rect.left,
        y: evt.clientY -rect.top
    };
}
