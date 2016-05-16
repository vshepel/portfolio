$( function() {

    $('.work_link').hover(
        function() {
            var icon = $(this).find('i')
            icon.removeClass('fadeOutDown').addClass('fadeInUp');
        },
        function() {
            var icon = $(this).find('i')
            icon.addClass('fadeOutDown').removeClass('fadeInUp');
        }
    );

    $('.work_list').masonry({
        itemSelector: '.work',
        columnWidth: '.column_size',
        percentPosition: true
    }).isotope({
        itemSelector: '.work'

    });

    var $grid = $('.work_list').isotope({
        itemSelector: '.work'
    });
    $('.filters-button-group').on( 'click', 'button', function() {
        var filterValue = $( this ).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });
    $('.button-group').each( function( i, buttonGroup ) {
        var $buttonGroup = $( buttonGroup );
        $buttonGroup.on( 'click', 'button', function() {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $( this ).addClass('is-checked');
        });
    });
});