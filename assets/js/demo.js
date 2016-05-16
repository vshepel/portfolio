$(document).ready(function() {
    $('#download').click(function(e) {
        e.preventDefault();
        $('#download-text').removeClass('fadeOut').addClass('fadeIn');
        $('#download-text img').addClass('bounceInLeft').removeClass('bounceOutLeft');
        setTimeout(function() {
            if( $('#download-text').hasClass('fadeIn') ) {
                window.location.href = $('#download').attr('href');
            }
        }, 2000);
        return false;
    });
    $('.close').on("click", function() {
        $('#download-text img').removeClass('bounceInLeft').addClass('bounceOutLeft');
        setTimeout(function() {
            $('#download-text').removeClass('fadeIn').addClass('fadeOut');
        }, 500);
    });

    $('.image-block img').on("click", function() {
        if ( $(this).hasClass('responsive') ) {
            $(this).removeClass('responsive').addClass('full')
        }
        else {
            $(this).removeClass('full').addClass('responsive')
        }
    });
});
