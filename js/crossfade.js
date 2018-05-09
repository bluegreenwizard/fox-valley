$(document).ready(function() {
  var $blitter = $('#blitter');

  function crossfade() {
    var $current = $blitter.find('.active');
    var $next = ($current.next().length > 0) ? $current.next() : $blitter.find('img:first');
    $next.addClass('next');
    $current.fadeOut(2000, function() {
      $current.removeClass('active').fadeIn();
      $next.removeClass('next').addClass('active');
    });
  }

  setInterval(crossfade, 4000);
});