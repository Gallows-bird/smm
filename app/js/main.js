$(document).ready(function() {

    var burgerAnimate = $('.nav-toggle');

    $('#main-nav').on('show.bs.collapse', function() {
        burgerAnimate.addClass('nav-toggle--active');
    });

    $('#main-nav').on('hide.bs.collapse', function() {
        burgerAnimate.removeClass('nav-toggle--active');
    });


    $('.index-top').fadeIn(1500);
    // $('.auth-panel').fadeIn(500);


    $(function() {
        var indexBtnTop = $('.index-btn-top');
        indexBtnTop.animate({
            marginTop: '50px',
            opacity: 1
        }, 800);
    });


    var tab = document.querySelectorAll('.order-tab'),
        headerTab = document.querySelector('.order-panel'),
        tabContent = document.querySelectorAll('.price-tab');

    function hideTabContent(a) {
        for (var i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('active');
            tabContent[i].classList.add('hide');
        }
    }
    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('active');
        }
    }

    headerTab.addEventListener('click', function(event) {
        var target = event.target;
        if (target && target.classList.contains('order-tab')) {
            for (var i = 0; i < tabContent.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }

    });
});