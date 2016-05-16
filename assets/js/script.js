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

  $('#intro a[href*="#"]:not([href="#"])').click(scroll);

  if (event.which == 40) {
    var station = $(".stations > div a[href*='works']"),
      train = station.parent().find('img')

    train.queue(a);
    return false;
  }

  $('.stations > div').hover(
    function() {
      var img = $(this).find('img')
      img.removeClass('bounceOutLeft').addClass('bounceInLeft');
    },
    function() {
      var img = $(this).find('img')
      img.addClass('bounceOutLeft').removeClass('bounceInLeft');
      setTimeout(function() {
        img.removeClass('bounceOutLeft');
      }, 500);
    }
  );

  $(document).keydown(function(event) {

    var a = function() {
      var href = station.attr('href');
      if ($(this).hasClass('bounceInLeft')) {
        $(this).addClass('slideOutRight');
        $('#white').addClass('visable');
        setTimeout(function() {
          window.location = href
        }, 1000);
      } else {
        $(this).addClass('bounceInLeft');
        setTimeout(function() {
          train.addClass('slideOutRight');
          $('#white').addClass('visable');
        }, 1000);
        setTimeout(function() {
          window.location = href
        }, 2000);
      }
    }

    if (event.which == 87) {
      var station = $(".stations > div a[href*='works']"),
        train = station.parent().find('img')

      train.queue(a);
      return false;
    }

    if (event.which == 72) {
      var station = $(".stations > div a[href*='help']"),
        train = station.parent().find('img')

      train.queue(a);
      return false;
    }

    if (event.which == 67) {
      var station = $(".stations > div a[href*='contact']"),
        train = station.parent().find('img')

      train.queue(a);
      return false;
    }

  });

  $('.stations > div a').on('click', function() {
    var train = $(this).parent().find('img'),
      href = $(this).attr('href')

    $('#white').addClass('fadeIn');
    train.addClass('slideOutRight');
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
