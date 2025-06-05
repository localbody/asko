// var swiper = new Swiper('.easy-slider', {
//   pagination: {
//     el: '.easy-slider__paginator',
//   },
// })

const onLoad = () => {
  console.log('onLoad')

  const easySliders = document.querySelectorAll('.easy-slider')

  console.log(easySliders)

  easySliders.forEach((item) => {
    new Swiper(item, {
      pagination: {
        el: item.querySelector('.easy-slider__paginator'),
      },
    })
  })
}

document.addEventListener('DOMContentLoaded', onLoad)
