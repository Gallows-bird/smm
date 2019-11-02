$(document).ready(function() {

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
});