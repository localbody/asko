const swiperSliderPartners = new Swiper('.partners .swiper', {
  // Optional parameters
  slidesPerView: 3,
  //   centeredSlides: true,
  //   centeredSlidesBounds: true,
  //   spaceBetween: 30,

  breakpoints: {
    1650: {
      slidesPerView: 5,
    },

    1440: {
      slidesPerView: 4,
    },

    1280: {
      slidesPerView: 3,
    },
  },
  grabCursor: true,
  direction: 'horizontal',
  loop: true,
  freeMode: true,

  // Navigation arrows
  navigation: {
    nextEl: '.partners .slider-button-prev',
    prevEl: '.partners .slider-button-next',
  },
})
