$(function(){

    $('.rooms-cards').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<button type="button" class="rooms-prev"><i class="fa-solid fa-arrow-left fa-beat" style="color: #000000;"></i></button>',
        nextArrow: '<button type="button" class="rooms-next"><i class="fa-solid fa-arrow-right fa-beat" style="color: #000000;"></i></button>'
      });

      $('.mebel-content-gallery').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<button type="button" class="mebel-prev"><i class="fa-solid fa-arrow-left fa-beat" style="color: #000000;"></i></button>',
        nextArrow: '<button type="button" class="mebel-next"><i class="fa-solid fa-arrow-right fa-beat" style="color: #000000;"></i></button>'
      });

      $('.about-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        prevArrow: '<button type="button" class="about-prev"><i class="fa-solid fa-arrow-left fa-beat" style="color: #000000;"></i></button>',
        nextArrow: '<button type="button" class="about-next"><i class="fa-solid fa-arrow-right fa-beat" style="color: #000000;"></i></button>'
      });

});