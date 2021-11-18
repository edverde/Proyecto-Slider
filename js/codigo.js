const slider = document.getElementById("slider");
const progress = document.getElementById("progress");

slider.oninput = function(){
    progress.style.width = (400 * this.value) / 100 + "px";
};