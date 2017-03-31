$(document).foundation();

$(window).scroll(function() {
    if ($(this).scrollTop() > 400){
        $('.menu').addClass("stick");
    }
    else{
        $('.menu').removeClass("stick");
    }
});