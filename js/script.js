$(document).ready(function(){

});

jQuery(window).ready(function($) {
     $('#banner').flexslider({
        animation: "slide",
        controlNav: true,
        directionNav: false,
        prevText: "",  
        nextText: "", 
        animationLoop: true,
        slideshow: true,
        start: function(slider) {
            $('body').removeClass('loading');
        }
    });
});

