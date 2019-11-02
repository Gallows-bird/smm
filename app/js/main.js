<<<<<<< HEAD
$(document).ready(function() {

<<<<<<< HEAD
    $(function() {
        var burgerAnimate = $('.nav-toggle').on('click', function() {
            $(this).toggleClass('nav-toggle--active');
        });
    });

    $('.index-top').fadeIn(800);

    $(function() {
        var indexBtnTop = $('.index-btn-top');
        indexBtnTop.animate(
            {
                marginTop: '50px',
                opacity: 1
            }, 800);
    });
=======
    $('.nav-toggle').on('click', function() {
        $(this).toggleClass('nav-toggle--active');
    });


    $('.index-top').fadeIn(800);

    $('.index-btn-top').animate(
        {
            // marginTop: '20px',
            opacity: 1
        }, 1000);
>>>>>>> 4b6ebce07dff99bc8449a77a2793634f8215c47e
=======
$('.nav-toggle').on('click', function() {
    $(this).toggleClass('nav-toggle--active');
>>>>>>> parent of 148a755... price
});