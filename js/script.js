const onLoaded = () => {
  // закроем открытый popup (может быть только один открыт)
  const closePopup = function (event) {
    // console.log(event?.target, event?.currentTarget)

    const popup = document.querySelector('.popup-toggle.open')

    // если кликнули не по самому popup
    if (popup && !event?.target?.closest('.popup-toggle.open')) {
      popup?.classList.remove('open')
    }
  }

  // закроем попапы
  document.addEventListener('click', closePopup)

  const buttonSearch = document.querySelector('button.search')

  const onClickButtonSearch = (event) => {
    closePopup(event)
    document.querySelector('.wrapper--search')?.classList.toggle('open')
  }

  buttonSearch?.addEventListener('click', onClickButtonSearch)

  // .subnav .city-selector
  const citySelector = document.querySelector('.subnav .city-selector')

  const onClickCitySelector = function (event) {
    closePopup(event)

    // console.log(event.target, event.currentTarget)

    // если кликнули по городу из списка
    if (event.target.classList.contains('city')) {
      document.querySelector('.city-selected').textContent =
        event.target.textContent
      citySelector.dataset.city = event.target.textContent
    }

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
