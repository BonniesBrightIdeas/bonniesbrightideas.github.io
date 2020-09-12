
function fade() {
    $("#preloader").fadeOut("slow");
};
setTimeout(fade, 2500); 

function fadeOutEffect() {
  var fadeTarget = document.getElementById("#preloader");
  var fadeEffect = setInterval(function () {
      if (!fadeTarget.style.opacity) {
          fadeTarget.style.opacity = 1;
      }
      if (fadeTarget.style.opacity > 0) {
          fadeTarget.style.opacity -= 0.1;
      } else {
          clearInterval(fadeEffect);
      }
  }, 2000);
}

document.getElementById("target").addEventListener('click', fadeOutEffect);
function on() {
    document.getElementById("overlay").style.display = "block";
  }
  
function off() {
    document.getElementById("overlay").style.display = "none";
  }
// Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}