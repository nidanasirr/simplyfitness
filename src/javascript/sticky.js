$(document).ready(function () {
  var navbarOffset = $('header').offset().top;

  $(window).scroll(function () {
    if ($(window).scrollTop() > navbarOffset) {
      $('header').addClass('sticky');
    } else {
      $('header').removeClass('sticky');
    }
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#backToTop').fadeIn();
    } else {
      $('#backToTop').fadeOut();
    }
  });

  $('#backToTop').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 500);
    return false;
  });
});
