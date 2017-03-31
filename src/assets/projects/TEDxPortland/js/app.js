$(document).foundation();

$(document).ready(function(){
  $('.single-item').slick({
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
});
