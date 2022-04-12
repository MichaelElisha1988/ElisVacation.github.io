$(function() {

    "use strict";


    /* ================================================
       FLEX SLIDER
       ================================================ */

    if ($('.flexslider').length) {
        $('.flexslider').flexslider({
            animation: "slide",
            useCSS: Modernizr.touch
        });
    }

    /* ================================================
       Initialize Countdown
       ================================================ */

    /*Fetch Event Date From HTML. For Not tech Savvy Users */

    var get_date = $('#countdown').data('event-date');
    var evDate = Date.parse(get_date) / 1000;
    var currDate = Math.floor($.now() / 1000);

    if (evDate >= currDate) {
        if (get_date) {
            $("#countdown").countdown({
                date: get_date,
                /*Change date and time in HTML data-event-date attribute */
                format: "on"
            });
        }
    }


    /* ================================================
       Initialize Slick Slider 
       ================================================ */

    /* 
       SPEAKERS
       -------- */

    
        $('.speaker-slider').slick({
            slidesToShow: 6,
            autoplay: false,
            arrows: true,
            responsive: [{
                breakpoint: 1200,
                settings: {
                    arrows: true,
                    slidesToShow: 5
                }
            }, {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3
                }
            }, {
                breakpoint: 520,
                settings: {
                    slidesToShow: 1
                }
            }]
        });

        $('.speaker-slider2').slick({
            slidesToShow: 4,
            autoplay: false,
            arrows: true,
            responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4
                }
            }, {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3
                }
            }, {
                breakpoint: 520,
                settings: {
                    slidesToShow: 1
                }
            }]
        });


    /* ================================================
       Scroll Functions
       ================================================ */

    $(window).scroll(function() {
        if ($(window).scrollTop() > 1000) {
            $('.back_to_top').fadeIn('slow');
        } else {
            $('.back_to_top').fadeOut('slow');
        }
    });

    $('nav a[href^=#]:not([href=#]), .back_to_top').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 50
        }, 1500);
        event.preventDefault();
    });

    $('.scroll').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 50
        }, 1500);
        event.preventDefault();
    });

});

/* ================================================
   jQuery Validate - Reset Defaults
   ================================================ */

$.validator.setDefaults({
    highlight: function(element) {
        $(element).closest('.form-group').addClass('has-error');
    },
    unhighlight: function(element) {
        $(element).closest('.form-group').removeClass('has-error');
    },
    errorElement: 'small',
    errorClass: 'help-block',
    errorPlacement: function(error, element) {
        if (element.parent('.input-group').length) {
            error.insertAfter(element.parent());
        }
        if (element.parent('label').length) {
            error.insertAfter(element.parent());
        } else {
            error.insertAfter(element);
        }
    }
});

/* ================================================
   Magnific
   ================================================ */

   $('.speaker-slider2 .speaker-info a').magnificPopup({
       type: 'inline'
   });

/* ================================================
   Add to Calendar
   ================================================ */

(function() {
    if (window.addtocalendar)
        if (typeof window.addtocalendar.start == "function") return;
    if (window.ifaddtocalendar == undefined) {
        window.ifaddtocalendar = 1;
        var d = document,
            s = d.createElement('script'),
            g = 'getElementsByTagName';
        s.type = 'text/javascript';
        s.charset = 'UTF-8';
        s.async = true;
        s.src = ('https:' == window.location.protocol ? 'https' : 'http') + '://addtocalendar.com/atc/1.5/atc.min.js';
        var h = d[g]('body')[0];
        h.appendChild(s);
    }
})();



$(function() {

    /* ================================================
       Initialize WOW JS
       ================================================ */

    if ($('body').hasClass('animate-page')) {
        wow = new WOW({
            animateClass: 'animated',
            offset: 100,
            mobile: false
        });
        wow.init();
    }
});

/*
 * End $ Function
 * -------------- */
