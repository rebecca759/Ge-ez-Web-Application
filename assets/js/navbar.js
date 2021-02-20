/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  // if(currentScrollPos == 0){
  //   document.getElementById("navbar").style.display = "none";
  // }
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0px";
  } 
  if(currentScrollPos > prevScrollpos) {
    document.getElementById("navbar").style.top = " -50px";
    // document.getElementById("navbar").style.top = " -50";

  }

//   if (prevScrollpos == currentScrollPos) {
//     document.getElementById("navbar").style.display = "none";
//   }
  prevScrollpos = currentScrollPos;
}

