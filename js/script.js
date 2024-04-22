$(document).ready(function(){
	/*header-fixed*/
    /*header-fixed*/
    $(window).scroll(function(){
            
        if ($(window).scrollTop() >= 100) {
            $('#header').addClass('fixed-header1');
        }
        else {
            $('#header').removeClass('fixed-header1');
        }
              
    });
    $('.scroll, .mmenu a').on('click', function () {
        
        $('html, body').animate({
           
            scrollTop: $('#' + $(this).data('value')).offset().top
           
        }, 1000);
        
        $("body,html").removeClass('menu-toggle');
        
        $(".hamburger").removeClass('active');
        
    });
    /*open menu*/
    $(".hamburger").click(function(){
        $("body,html").addClass('menu-toggle');
        $(".hamburger").addClass('active');
    });
    $(".m-overlay").click(function(){
        $("body,html").removeClass('menu-toggle');
        $(".hamburger").removeClass('active');
    });
    
    $('.mmenu ul li').on('click', function () {
        $("body,html").removeClass('menu-toggle');
    });
    
    /*cart-menu*/
	$(function() {
		$('.btn-contact').click(function() {
				toggleNav();
			});
		});
		function toggleNav() {
			if ($('.aside-contact').hasClass('show-aside')) {
				$('.aside-contact').removeClass('show-aside');
			} else {
				$('.aside-contact').addClass('show-aside');
			}

			if ($('body').hasClass('over-hidden-body')) {
				$('body').removeClass('over-hidden-body');
			} else {
				$('body').addClass('over-hidden-body');
			}

		}
    $('.close-aside').click(function() {
            $('.aside-contact').removeClass('show-aside');
            $('body').removeClass('over-hidden-body');
    });
    
    /*page-scroll*/
    
    $(function() {
        $(document).on('click', 'a.page-scroll', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top-0
            }, 600, 'easeInOutExpo');
            event.preventDefault();
        });
    });
    
    
    $('#report-slider').owlCarousel({
        loop: false,
        margin: 30,
        rtl: true,
        singleItem:true,
        responsiveClass: true,
        responsive:{
            0:{
                items:1,
            },
            470:{
                items:1,
            },
            650:{
                items:1,
            },
            767:{
                items:1,
            },
            991:{
                items:2,
            },
            1199:{
                items:4,
            }
        },
        dots: false,
        nav: true,
        autoplay: true,
        navText:['<i class="ti-angle-left"></i>','<i class="ti-angle-right"></i>'],
    }); 
    
    $('#client-slider').owlCarousel({
        loop: false,
        margin: 30,
        rtl: true,
        singleItem:true,
        responsiveClass: true,
        responsive:{
            0:{
                items:1,
            },
            470:{
                items:2,
            },
            650:{
                items:2,
            },
            767:{
                items:2,
            },
            991:{
                items:2,
            },
            1199:{
                items:5,
            }
        },
        dots: false,
        nav: false,
        autoplay: true,
//        navText:['<i class="ti-angle-left"></i>','<i class="ti-angle-right"></i>'],
    });
    
    $('#slide-home').owlCarousel({
        loop: true,
        margin: 30,
        rtl: true,
        responsiveClass: true,
        items: 1,
        dots: true,
        nav: true,
        autoplay: false,
//        navText:['<i class="ti-angle-left"></i>','<i class="ti-angle-right"></i>'],
    });
    

})