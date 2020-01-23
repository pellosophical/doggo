// nav menu + body transitions
$('.hamburger').click(function() {
  $(".nav-menu").toggleClass("nav-menu-slide");
  $(".wrap").toggleClass("wrap--slide");
  $(".menu-toggle").toggleClass("menu-toggle-active");
});
// hamburger animation
var hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function() {
  hamburger.classList.toggle("is-active");
});
// nav links accordion
$('.toggle').click(function() {
  $(this).toggleClass("toggle--active");
});
// accordion component
$(document).ready(function($) {
  $('.accordion').find('.accordion--toggle').click(function() {
    //Expand or collapse this panel
    $(this).next().slideToggle('fast');
    //Hide the other panels
    $(".accordion--content").not($(this).next()).slideUp('fast');
  });
});
// chevron rotate
$('.accordion--toggle').click(function() {
  $(this).children(".accordion--chevron").toggleClass("chevron--rotate");
});