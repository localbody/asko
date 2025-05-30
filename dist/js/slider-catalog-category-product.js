var swiper = new Swiper('.catalog-category-product .slider__full', {
  pagination: {
    el: '.catalog-category-product .slider__paginator',
  },
})

var swiper_thumbs = new Swiper('.catalog-category-product .slider__thumbs', {
  spaceBetween: 24,
  slidesPerView: 5,
  freeMode: true,
  watchSlidesProgress: true,
  direction: 'vertical',
  thumbs: {
    swiper: swiper,
  },
})
