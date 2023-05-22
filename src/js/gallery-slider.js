$(document).ready(function () {
  $('.gallery__slider').slick({
    adaptiveHeight: true,
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          arrows: false,
        },
      },
    ],
  });

  $('.masonry__item-img-1').click(function (event) {
    $('.gallery__slider').slick('goTo', 0);
  });
  $('.masonry__item-img-2').click(function (event) {
    $('.gallery__slider').slick('goTo', 1);
  });
  $('.masonry__item-img-3').click(function (event) {
    $('.gallery__slider').slick('goTo', 2);
  });
  $('.masonry__item-img-4').click(function (event) {
    $('.gallery__slider').slick('goTo', 3);
  });
  $('.masonry__item-img-5').click(function (event) {
    $('.gallery__slider').slick('goTo', 4);
  });
  $('.masonry__item-img-6').click(function (event) {
    $('.gallery__slider').slick('goTo', 5);
  });
  $('.masonry__item-img-7').click(function (event) {
    $('.gallery__slider').slick('goTo', 6);
  });
  $('.masonry__item-img-8').click(function (event) {
    $('.gallery__slider').slick('goTo', 7);
  });
  $('.masonry__item-img-9').click(function (event) {
    $('.gallery__slider').slick('goTo', 8);
  });
  $('.masonry__item-img-10').click(function (event) {
    $('.gallery__slider').slick('goTo', 9);
  });
  $('.masonry__item-img-11').click(function (event) {
    $('.gallery__slider').slick('goTo', 10);
  });
});
