$(function () {
    var mixer = mixitup('.products__inner-box');

    $('.rate-star').rateYo({
        rating: 3.6,
        starWidth: "12px"
      });

    $('.product-slider__inner').slick({
      dots: true,
      arrows: false,
      slidesToShow: 4,
    slidesToScroll: 3,
    })
let test = document.querySelectorAll('.product__item');



  test.classList.add('test');

});
