const onLoaded = () => {
  //catalog-in-header
  const COUNT_OF_CATALOG_ITEMS_TO_SHOW = 10
  const catalogInHeader = document.querySelector('.catalog-in-header .catalog')
  const listUL = catalogInHeader.querySelectorAll('ul')

  const buttonCatalogOpen = document.querySelector('.catalog-open')

  const onClickButtonCatalogOpen = () => {
    closePopup()
    buttonCatalogOpen.closest('.popup-toggle').classList.toggle('open')
  }

  buttonCatalogOpen.addEventListener('click', onClickButtonCatalogOpen)

  // свернем в каталоге строки, где больше 10 строк
  // если нет более 10 строк - скроем кнопку ЕЩЕ

  listUL.forEach((item) => {
    // debugger
    let isShowButtonMore = false
    item.querySelectorAll('li.item').forEach((itemLI, index) => {
      if (index > COUNT_OF_CATALOG_ITEMS_TO_SHOW) {
        itemLI.classList.add('item--hidden')
        isShowButtonMore = true
      }
    })

    if (!isShowButtonMore) {
      item.querySelector('li.more').style.display = 'none'
    }
  })

  const listButtonMore = catalogInHeader.querySelectorAll('.more')

  listButtonMore.forEach((item) => {
    const onClickButtonMore = (event) => {
      event.target.classList.toggle('more--expanded')

      const listLI = event.target.closest('ul').querySelectorAll('li.item')

      listLI.forEach((itemLI, index) => {
        if (index > COUNT_OF_CATALOG_ITEMS_TO_SHOW) {
          itemLI.classList.toggle('item--hidden')
        }
      })
    }

    item.addEventListener('click', onClickButtonMore)
  })

  // end catalog-in-header

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
    // console.log(event.target, event.currentTarget)

    // если кликнули по городу из списка
    if (event.target.classList.contains('city')) {
      document.querySelector('.city-selected').textContent =
        event.target.textContent
      citySelector.dataset.city = event.target.textContent
    }
    closePopup(event)

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
