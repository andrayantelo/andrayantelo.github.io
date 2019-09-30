function myFunction() {
  var nav = document.getElementById("nav-bar");
  if (nav.className === "topnav") {
    nav.className += " responsive";
    /*nav.style.height = "250px";*/
  } else {
    nav.className = "topnav";
    /*nav.style.height = "150px";*/
  }
}


// TODO
/*make a animation or whatever where the car image drives to the right and off screen and then it's back where it started 

Do I want to change img widths to be 100% instead of 100vmax?
Replace images with free stock photos

consolidate CSS
*/
