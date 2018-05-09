$('document').ready(function() {
  //Cache DOM
  var $body  = $('html, body');
  var $faq   = $('#faq-links');
  var $faqStart = $('#start');
  var $items = $('.faq-item');
  var $doc = $(document);
  var $links = $('#faq-links a');
  var $backtop = $('#backtop');

  var height;
  var startDist;
  var topOffset;

  function scrollMenu() {
    var n = 0;
    var p = 0;
    var current = -1;
    var currentElem;
    var height = $(window).height();
    var startDist = $faqStart.offset().top;

    $items.each(function(i, elem) {
      var topOffset;
      if($(elem).offset().top - 200 <= $doc.scrollTop()) {
        currentElem = elem;
        if (window.innerWidth > 767) {
          topOffset = ((height / 100) * 65);
        } else {
          topOffset = getBackgroundHeight(elem) - vhToPx(20);
        }

        n = $(elem).offset().top - startDist + topOffset;
        current = i;
      }
    });
    $faq.css({ top: n + 'px' });

    $links.removeClass('current');
    if(current >= 0) {
        //Highlight current section.
       $links.eq(current).addClass('current');
       //Show back button.
       $backtop.css({ display: 'block' });
     } else {
       $backtop.css({ display: 'none' });
     }
  }

  function setPHeight() {
    var p, ph;
    $items.each(function(i, elem) {
      if (window.innerWidth <= 767) {
        p = getBackgroundHeight(elem);
        ph = vhToPx(100) - p;
      } else {
        p = 0;
        ph = vhToPx(100);
      }
      $(elem).find('p').css({
        marginTop: p + 'px',
        height:    ph + 'px'
      });
    });
  }

  function scrollPage(){
    $body.animate({
      scrollTop: $( $(this).attr('href') ).offset().top
    }, 1500);
    return false;
  }

  function getBackgroundHeight(elem) {
    var img = new Image();
    img.src = $(elem).css('background-image').replace(/url\("|"\)/ig, "");
    return Math.floor(document.body.offsetWidth * img.height / img.width);
  }

  function vhToPx(vh) {
    return ($(window).height() / 100) * vh;
  }

  //Event Listeners
  $(window).resize(function () {
    setPHeight();
    scrollMenu();
  });

  $('.faq-link').click(scrollPage);

  $(window).scroll(scrollMenu);

  $doc.ready(function() {
    setPHeight();
    scrollMenu();
  });

});