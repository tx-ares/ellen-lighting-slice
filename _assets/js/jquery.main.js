

function showPage() {
	"use strict";
	
	(function defer() {
		if ($('body').hasClass('cssloaded')) {
					
			//make page visible
			$('html,body').animate({
				opacity: 1
			}, 500, function() {
				
				$('html,body').css({
					'overflow':'visible'
				});
				
				setTimeout(function() {
					loadElements();
				 }, 500);
			});
		}
		else {
			setTimeout(function() { defer(); }, 50);
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
	
	$('img.lazy').unveil(200, function() {
		$(this).load(function() {
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
	
	if(window.matchMedia('only screen and (min-width: 769px)').matches) {
		$("*[data-img]").each(function() {
			var dataImg = $(this).attr('data-img');
			dataImg = dataImg.replace('?ext=.jpg','');
			dataImg = dataImg.replace('?ext=.png','');
				
			$(this).css('background','url('+ dataImg +') no-repeat center center');
			$(this).css('-webkit-background-size','cover');
			$(this).css('-moz-background-size','cover');
			$(this).css('-o-background-size','cover');
			$(this).css('background-size','cover');
		});
	}
}

function initSlider() {
	"use strict";
	
	$('.slider').each(function() {
    	var parentWidth = $(this).parent().find('.slider-width-hack').width();
		
		if(window.matchMedia('only screen and (max-width: 1024px)').matches) {
			parentWidth = $('body').prop('clientWidth');
		}
		
		$(this)
			.on('init', function() {
				$(this).width(parentWidth);
			})
			.slick({
				lazyLoad: 'ondemand',
				autoplay: true,
				autoplaySpeed: 6000,
				pauseOnHover: false,
				dots: false,
				ininite: true
				
			});	
    });
	
	
	$(window).trigger('resize');
	
}

function resizeSlider() {
	"use strict";
	
	
	$('.slider').each(function() {
    	var parentWidth = $(this).parent().find('.slider-width-hack').width();
		
		if(window.matchMedia('only screen and (max-width: 1024px)').matches) {
			parentWidth = $('body').prop('clientWidth');
		}
		
		$(this).width(parentWidth);
		$(this).slick('slickGoTo', 0, true);
    });
}


function initToggleActiveClass() {
	"use strict";
	
	$('[toggle-active-opener]').click(function (e) {
		e.preventDefault();
		$(this).closest('[toggle-active-parent]').toggleClass('active');
	});
}


$(window).load(function () {
	"use strict";

});

// JavaScript Document
jQuery(document).ready(function() {
	"use strict";
	
	showPage();
	initToggleActiveClass();
	
	initLazyLoadImage();
	initAccordion();

	initOpenCloseSearch();
	initdataImageBackground();
	initSlider();
	initAccordion();
	RESPONSIVEUI.responsiveTabs();
});



































