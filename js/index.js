/* function fade() {
    $(".preloader").fadeOut("slow");
}
setTimeout(fade, 2000); */

/* Tool Tip  line 116  */
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  }) 

function on() {
    document.getElementById("overlay").style.display = "block";
  }
  
function off() {
    document.getElementById("overlay").style.display = "none";
  }