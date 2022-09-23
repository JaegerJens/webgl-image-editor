function loadImage(changeEvent) {
    console.log('Load image');
    const files = changeEvent.target.files;
    if (files.length === 0) {
        console.error('no images selected');
        return;
    }
    const imageFile = changeEvent.target.files[0];
    const canvas = document.getElementById('image');
    canvas.title = imageFile.name;

    const reader = new FileReader();
    reader.onload = event => {
        canvas.src = event.target.result;
        console.log('image loaded');
    }
    reader.readAsDataURL(imageFile);
}

function webgl() {
    const canvas = document.querySelector("#glCanvas");
    // Initialize the GL context
    const gl = canvas.getContext("webgl");
  
    // Only continue if WebGL is available and working
    if (gl === null) {
      alert("Unable to initialize WebGL. Your browser or machine may not support it.");
      return;
    }
  
    // Set clear color to black, fully opaque
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    // Clear the color buffer with specified clear color
    gl.clear(gl.COLOR_BUFFER_BIT);
    console.log('WebGL done');
}

function main() {
    const fileInput = document.getElementById('imageSource');
    fileInput.addEventListener('change', loadImage);
}
  
window.onload = main;
