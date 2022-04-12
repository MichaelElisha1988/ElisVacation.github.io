$(function() {

    "use strict";

    
    var $form = $('#mc-embedded-subscribe-form');
    $form.validate({
        onkeyup: false,
        rules: {
            FNAME: "required",
            LNAME: "required",
            EMAIL: {
                required: true,
                email: true
            },
            
        },
        messages: {
            FNAME: "Please Fillup the form",
            LNAME: "Please Fillup the form",
            EMAIL: "Please Fillup the form",
        }
    });

    $form.on('submit', function(e) {
        if(!$form.valid()) {
            e.preventDefault && e.preventDefault();
            e.stopImmediatePropagation && e.stopImmediatePropagation()
            return false;
        }
       
        return false;
    });

    $form.ajaxChimp({
        url: $form.attr('action'),
        callback: function(resp){
            console.log(resp);
            $('#contact .section-title, #contact .contact-form').fadeOut();
            $('html, body').stop().animate({
                scrollTop: $("#contact").offset().top - 50
            }, 300);
            $('.thanku').fadeIn();
        }
    });
    
   
})

