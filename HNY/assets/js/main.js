$(document).ready(function() {
    setInterval(function() {
        $('.lights, .tomato').toggleClass('toggleColor');
    }, 800);
    tomato = setInterval(function() {
        $('.tomato').toggleClass('shake');
    }, 2500);


    $('.next').on('click', function() {
        $('#main').css({
            left: "-100%"
        });
        $('.lights').css({
            left: "-10%"
        });
        $('.snow').css({
            left: "-10%"
        });
        $('.carts').addClass('animated fadeInUp');
        $('.cart.one').addClass('cart-animated cart-rotate');
        $('.cart.two').addClass('cart-animated cart-rotate-back');
        $('.cart.three').addClass('cart-animated cart-rotate-back');
        $('.cart.four').addClass('cart-animated cart-rotate');
        setTimeout(function() {
            $('.carts').removeClass('animated fadeInUp');
        }, 2000);
    });

    $('.start').on('click', function() {
        $('.carts').removeClass('fadeInUp').css({
            transform: "translate3d(0, 100vh, 0)"
        });
        setTimeout(function() {
            $('#main').css({
                left: "-200%"
            });
            $('.lights').css({
                left: "-20%"
            });
            $('.snow').css({
                left: "-20%"
            });
        }, 500);
        setTimeout(function() {
            $("#note-input-1").focus()
            $('.carts').css({
                transform: "none"
            });
            $('.cart').removeClass('cart-animated cart-rotate-back cart-rotate');
        }, 1000)
    });

    $("#note-input-1").keyup(function(event) {
        if ($(this).val() == '10-27-10') {
            $(this).prop("disabled", true).parent('.note').addClass('complete').find('p').text('Первая записочка внесена!');
            $("#note-input-2").prop("disabled", false).focus().parent('.note').removeClass('disable');
        } else if ($(this).val().length >= 8) {
            $(this).parent('.note').addClass('error')
        } else if ($(this).val().length < 8) {
            $(this).parent('.note').removeClass('error')
        }
    });
    $("#note-input-2").keyup(function(event) {
        if ($(this).val() == '14-6-15-33') {
            $(this).prop("disabled", true).parent('.note').addClass('complete').find('p').text('Умница, половину нашла');
            $("#note-input-3").prop("disabled", false).focus().parent('.note').removeClass('disable');
        } else if ($(this).val().length >= 10) {
            $(this).parent('.note').addClass('error')
        } else if ($(this).val().length < 10) {
            $(this).parent('.note').removeClass('error')
        }
    });
    $("#note-input-3").keyup(function(event) {
        if ($(this).val() == '12-1-12') {
            $(this).prop("disabled", true).parent('.note').addClass('complete').find('p').text('Уфф.. Да ты быстрая');
            $("#note-input-4").prop("disabled", false).focus().parent('.note').removeClass('disable');
        } else if ($(this).val().length >= 7) {
            $(this).parent('.note').addClass('error')
        } else if ($(this).val().length < 7) {
            $(this).parent('.note').removeClass('error')
        }
    });
    $("#note-input-4").keyup(function(event) {
        if ($(this).val() == '8-31-13-31') {
            $(this).prop("disabled", true).parent('.note').addClass('complete').find('p').text('Мои поздравления!');
            setTimeout(function() {
                $('#main').css({
                    left: "-300%"
                });
                $('.lights').css({
                    left: "-30%"
                });
                $('.snow').css({
                    left: "-30%"
                });
                $('.carts').addClass('animated fadeInUp');
                $('.cart.one').addClass('cart-animated cart-rotate');
                $('.cart.two').addClass('cart-animated cart-rotate-back');
                $('.cart.three').addClass('cart-animated cart-rotate-back');
                $('.cart.four').addClass('cart-animated cart-rotate');
            }, 1000)
        } else if ($(this).val().length >= 10) {
            $(this).parent('.note').addClass('error')
        } else if ($(this).val().length < 10) {
            $(this).parent('.note').removeClass('error')
        }
    });
});
