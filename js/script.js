const onLoaded = () => {
  // закроем открытый popup
  const closePopup = function (event) {
    const popup = document.querySelector('.popup-toggle.open')
    // если кликнули не по самому popup
    if (popup && !event.target.closest('.popup-toggle')) {
      popup?.classList.remove('open')
    }
  }

  document.addEventListener('click', closePopup)

  // .subnav .city-selector
  const citySelector = document.querySelector('.subnav .city-selector')

  const onClickCitySelector = function (event) {
    citySelector?.classList.toggle('open')
  }

  citySelector?.addEventListener('click', onClickCitySelector)

  // end .subnav .city-selector

  // accordion
  const accordions = document.querySelectorAll('.accordion')

  const onClickAccordionItem = function (event) {
    const accordionItem = event.target.closest('.item')
    accordionItem?.classList.toggle('item--open')
  }

  accordions?.forEach((item) => {
    item.addEventListener('click', onClickAccordionItem)
  })
  // end accordion
}

document.addEventListener('DOMContentLoaded', onLoaded)
