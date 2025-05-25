const swiperSliderPartners = new Swiper('.partners .swiper', {
  // Optional parameters
  slidesPerView: 5,
  //   centeredSlides: true,
  //   centeredSlidesBounds: true,
  //   spaceBetween: 30,
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
