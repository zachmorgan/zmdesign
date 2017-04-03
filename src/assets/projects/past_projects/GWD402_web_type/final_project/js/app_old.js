// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

/*#######################################
########### Menu Effects ###########*/
$(window).scroll(function() {
    if ($(this).scrollTop() > 400){
        $('.menu').addClass("stick");
    }
    else{
        $('.menu').removeClass("stick");
    }
});