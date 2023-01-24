window.addEventListener('DOMContentLoaded', (event) => {
    let slider = document.getElementById("myRange");
    let duration = document.getElementById("duration");
    duration.innerHTML = slider.value;
    slider.oninput = changeDuration;
    changeDuration.call(slider);
});




function changeDuration() {
  duration.innerHTML = this.value;
  // console.log(this.value);
  let input = this.value;
  console.log(input);
  let animation = document.getElementById("rotationAnimation");
  animation.setAttribute("dur",input); 
}

