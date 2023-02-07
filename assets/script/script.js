// add class navbarDark on navbar scroll
$(document).ready(function(){
    $(".navbar-toggler").click(function(){
      $("#navbarSupportedContent").slideToggle();
    });
  });
  

  // add class navbarDark on navbar scroll
const header = document.querySelector('.custom-navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}
