//Canvas constants
const canvas = document.getElementById('bullsEye');
const ctx = canvas.getContext('2d');
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const radius = 200;

//Slider
let slider = document.getElementById("myRange");
let bandWidth = document.getElementById("bandWidth");

bandWidth.innerHTML = slider.value;

function draw() {
  bandWidth.innerHTML = this.value;
  // console.log(this.value);
  let input = this.value;
  let circle = radius;
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  for(let i = 0; input <= circle; circle -= input, i++){
    // console.log(circle);
    ctx.beginPath();
    ctx.arc(centerX, centerY, circle, 0, 2 * Math.PI, false);
    ctx.fillStyle = i % 2 === 0 ? 'red' : 'blue';
    ctx.fill();
  }
}

slider.oninput = draw;
draw.call(slider);