// define mobile nav
var mobileNav = document.getElementById("mobileNav");

// toggle class
function toggleNav(x) {
    x.classList.toggle("change");
    
    mobileNav.classList.toggle("closed");
}

// close nav when mobile item clicked
function closeNav() {
	mobileNav.classList.add("closed");
	document.querySelector('.hamburger-menu').classList.remove('change');
}

// add smooth scrolling to anchor
$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    } 
  });
});
