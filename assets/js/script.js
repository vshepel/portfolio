$(document).ready(function() {

  var scroll = function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  }

  $('#route a').on('click', function() {
    var href = $(this).attr('href')

    $('#white').addClass('fadeIn');
    $('#route .train').addClass('out');
    setTimeout(function() {
      window.location = href
    }, 1000);
    return false;
  });

  $('.next-link').on('click', function() {
    var train = $(this).parent().parent().parent().find('img'),
      href = $(this).attr('href')

    $('#white').removeClass('fadeOut').addClass('fadeIn');
    train.addClass('bounceOutRight');
    setTimeout(function() {
      window.location = href
    }, 1000);
    return false;
  });

  $('.back-link').on('click', function() {
    var train = $(this).parent().parent().parent().find('img'),
      href = $(this).attr('href')

    $('#white').removeClass('fadeOut').addClass('fadeIn');
    train.addClass('bounceOutLeft');
    setTimeout(function() {
      window.location = href
    }, 1000);
    return false;
  });

  $(document).ready(function() {
    if (document.referrer.indexOf("contact") > -1) {
      $('#train').removeClass('bounceInLeft').addClass('bounceInRight')
    }
  });

});
