$(document).ready(function() {

    $('.nav-toggle').on('click', function() {
        $(this).toggleClass('nav-toggle--active');
    });


    $('.index-top').fadeIn(800);

    $('.index-btn-top').animate(
        {
            // marginTop: '20px',
            opacity: 1
        }, 1000);
});