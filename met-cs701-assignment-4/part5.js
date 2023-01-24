window.onload = init;

var target;

function init() {
    // Add event handlers
    for(var i = 0; i < 6; i++){
        var target = document.getElementById(`target${i}`);
        target.ondragenter = handleDrag;
        target.ondragover = handleDrag;
        target.ondrop = handleDrop;
    }



  
}

function handleDrag(e) {
    e.preventDefault();
}

function handleDrop(e) {
    var files = e.dataTransfer.files;
    var elementId = e.currentTarget.id
    handleFiles(files, elementId);
    e.preventDefault();
}
function handleFiles(files, elementId) {
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
  
      if (!file.type.startsWith('image/')){ continue }
  
      const img = document.createElement("img");
      img.classList.add("obj");
      img.file = file;
      var target = document.getElementById(elementId);
      target.appendChild(img); 
  
      const reader = new FileReader();
      reader.onload = (function(aImg) { return function(e) { aImg.src = e.target.result; }; })(img);
      reader.readAsDataURL(file);
    }
  }
