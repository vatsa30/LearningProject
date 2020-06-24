// Created by Vatsa shah

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("sliderimg");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}  
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active","");
  }  
  x[myIndex-1].style.display = "block";  
  dots[myIndex-1].className += " active";
  setTimeout(carousel, 3000); 
}
