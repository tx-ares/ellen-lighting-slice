
function showPage() {
    "use strict";

    (function defer() {
        if ($('body').hasClass('cssloaded')) {

            //make page visible
            $('html,body').animate({
                opacity: 1
            }, 500, function () {

                $('html,body').css({
                    'overflow': 'visible'
                });

                setTimeout(function () {
                    loadElements();
                }, 500);
            });
        }
        else {
            setTimeout(function () { defer(); }, 50);
        }
    })();

}

function loadElements() {
    "use strict";

    $('footer').addClass('loaded');
}

function initAccordion() {
    "use strict";

    $('.accordion').slideAccordion({
        opener: '.opener',
        slider: '.slide',
        animSpeed: 300
    });
}

function initDesktopMenu() {
    "use strict";

    $('header .top-nav li').has('ul').addClass('has-sub');
}

function initLazyLoadImage() {
    "use strict";

    $('img.lazy').unveil(200, function () {
        $(this).load(function () {
            $(this).addClass('loaded');
        });
    });
}

function initAccordion() {
    "use strict";

    $('.accordion').slideAccordion({
        opener: '.opener',
        slider: '.slide',
        animSpeed: 300
    });
}

function initdataImageBackground() {
    "use strict";

    if (window.matchMedia('only screen and (min-width: 769px)').matches) {
        $("*[data-img]").each(function () {
            var dataImg = $(this).attr('data-img');
            dataImg = dataImg.replace('?ext=.jpg', '');
            dataImg = dataImg.replace('?ext=.png', '');

            $(this).css('background', 'url(' + dataImg + ') no-repeat center center');
            $(this).css('-webkit-background-size', 'cover');
            $(this).css('-moz-background-size', 'cover');
            $(this).css('-o-background-size', 'cover');
            $(this).css('background-size', 'cover');
        });
    }
}

function initSlider() {
    "use strict";

    $('.slider').slick({
			    lazyLoad: 'ondemand',
			    autoplay: true,
			    autoplaySpeed: 6000,
			    pauseOnHover: false,
			    dots: false,
			    ininite: true,
			    draggable: false,
			    swipe: false,
			    swipeToSlide: false,
                touchMove: false
   });


}

function initOpenCloseSearch() {
    "use strict";

    $('.top-search-opener').click(function (e) {
        e.preventDefault();

        $('.search-box').toggleClass('active');
    });

    $('.search-close').click(function (e) {
        e.preventDefault();

        $('.search-box').toggleClass('active');
    });

}

function initToggleActiveClass() {
    "use strict";

    $('[toggle-active-opener]').click(function (e) {
        e.preventDefault();
        $(this).closest('[toggle-active-parent]').toggleClass('active');
    });
}

function initSideMenuSelect() {

    var selectedNavLi = $('.side-menu > li')

    selectedNavLi.on('click', function () {
        console.log(this.getAttribute('id'));
        var html
        if (this.getAttribute('id') === 'home') {
            console.log("home selected")
            html = "home view"
        }

        if (this.getAttribute('id') === 'admin') {
            html = "admin view"
        }

        if (this.getAttribute('id') === 'reports') {
            html = "reports view"
        }

        document.querySelector(".viewer").innerHTML = html

    });
}

$(window).load(function () {
    "use strict";
});

// JavaScript Document
jQuery(document).ready(function () {
    "use strict";

    showPage();
    initToggleActiveClass();

    initLazyLoadImage();
    initAccordion();

    initdataImageBackground();
    initSlider();
    initAccordion();
    RESPONSIVEUI.responsiveTabs();

    initSideMenuSelect();
});