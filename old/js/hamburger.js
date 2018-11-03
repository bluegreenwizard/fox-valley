$(document).ready(function() {
  //Cache DOM
  var $burger = $('#hamburger');
  var $burgerButton = $('#burger-button');
  var $nav = $('header nav ul');
  var $window = $(window);

  $burgerButton.click(function(e) {
    $nav.slideToggle("slow");
    return false;
  });

  //Make sure nav unhides when making window wider.
  $window.resize(function() {
    if (window.innerWidth > 768) {
      $nav.show();
    }
  })

});