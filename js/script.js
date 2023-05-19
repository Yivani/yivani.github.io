window.addEventListener("scroll", function() {
  var parallax = document.querySelector(".parallax-image");
  var scrollTop = window.pageYOffset;
  var parallaxOffset = scrollTop * 0.6; /* Ändert den Multiplikator, um die Geschwindigkeit des Parallax-Effekts anzupassen */
  parallax.style.transform = "translate3d(0, " + parallaxOffset + "px, 0)";
});
