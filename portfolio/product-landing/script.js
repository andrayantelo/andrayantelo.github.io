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
