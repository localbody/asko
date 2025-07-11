const onLoaded = () => {
  const overlayMain = document.querySelector('.overlay--main')

  // send-request
  listSendRequestButton = document.querySelectorAll(
    '[data-action="send-request"]',
  )

  const popupSendRequest = document.querySelector('[data-popup="send-request"]')

  const onClickSendRequest = () => {
    //
    if (popupSendRequest) {
      //  если открыто mobile-menu
      if (
        !document.querySelector('.mobile-menu').classList.contains('hidden')
      ) {
        popupSendRequest.classList.toggle('hidden')
      } else {
        overlayMain.classList.toggle('hidden')
        popupSendRequest.classList.toggle('hidden')
      }
    }
  }

  if (listSendRequestButton) {
    listSendRequestButton.forEach((button) => {
      button.addEventListener('click', onClickSendRequest)
    })
  }
  // END send-request

  // popup close

  const listPopupButtonClose = document.querySelectorAll('.popup__button-close')

  if (listPopupButtonClose) {
    const onClickButtonPopupClose = (event) => {
      //  если открыто mobile-menu
      if (
        !document.querySelector('.mobile-menu').classList.contains('hidden')
      ) {
        event.target.closest('.popup').classList.toggle('hidden')
      } else {
        event.target.closest('.popup').classList.toggle('hidden')
        overlayMain.classList.toggle('hidden')
      }
    }

    listPopupButtonClose.forEach((popupButtonClose) => {
      popupButtonClose.addEventListener('click', onClickButtonPopupClose)
    })
  }

  // END popup close

  // button.burger
  const buttonCloseMenu = document.querySelector('button.close-menu')
  const buttonBurger = document.querySelector('button.burger')

  const onClickButtonBurger = () => {
    document.querySelector('.overlay--main').classList.toggle('hidden')
    document.querySelector('.mobile-menu').classList.toggle('hidden')
  }

  buttonCloseMenu?.addEventListener('click', onClickButtonBurger)
  buttonBurger?.addEventListener('click', onClickButtonBurger)

  // end button.burger

  // mobile-menu submenu
  const listMobileSubMenu = document.querySelectorAll(
    '.mobile-menu .submenu button',
  )

  const onClickMobileSubmenu = (event) => {
    event.target.closest('li.submenu').classList.toggle('submenu--open')
  }

  listMobileSubMenu?.forEach((item) => {
    item.addEventListener('click', onClickMobileSubmenu)
  })

  // end mobile-menu submenu

  // phone-mask
  const listPhoneInput = document.querySelectorAll('.phone-with-mask')

  if (listPhoneInput) {
    listPhoneInput.forEach((phoneInput) => {
      phoneInput.addEventListener('input', function (e) {
        // Удаляем все символы, кроме цифр
        let numbers = this.value.replace(/\D/g, '')

        // Удаляем ведущие символы, кроме первой 7
        if (!numbers.startsWith('7')) {
          numbers = '7' + numbers
        }

        // Ограничиваем длину до 11 цифр (7 + 10 цифр номера)
        numbers = numbers.substring(0, 11)

        // Форматируем строку
        let formatted = '+7 '

        if (numbers.length > 1) {
          formatted += numbers.substring(1, 4)
        }
        if (numbers.length >= 4) {
          formatted += '-' + numbers.substring(4, 7)
        }
        if (numbers.length >= 7) {
          formatted += '-' + numbers.substring(7, 9)
        }
        if (numbers.length >= 9) {
          formatted += '-' + numbers.substring(9, 11)
        }

        this.value = formatted
      })
    })
  }
  // end phone-mask

  // sidebar in catalog
  const listSidebarItemsTypes = document.querySelectorAll(
    '.main .sidebar .item-type span',
  )

  const onClickSidebarItemType = (event) => {
    if (
      event.target.closest('li.item-type').classList.contains('item-type--open')
    ) {
      event.target.closest('li.item-type').classList.remove('item-type--open')
    } else {
      // закроем открытый
      document
        .querySelector('.main .sidebar .item-type--open')
        ?.classList?.remove('item-type--open')

      event.target.closest('li.item-type').classList.add('item-type--open')
    }
  }

  listSidebarItemsTypes?.forEach((item) => {
    item.addEventListener('click', onClickSidebarItemType)
  })

  // end sidebar in catalog

  // .mobile-menu .submenu
  const COUNT_OF_SUBMENU_ITEMS_TO_SHOW = 5
  const listSubmenu = document.querySelectorAll('.mobile-menu .submenu')

  listSubmenu?.forEach((submenu) => {
    const listUL = submenu.querySelectorAll('ul')

    // свернем в каталоге строки, где больше 10 строк
    // если нет более 10 строк - скроем кнопку ЕЩЕ

    listUL?.forEach((item) => {
      let isShowButtonMore = false
      item.querySelectorAll('li.item').forEach((itemLI, index) => {
        if (index > COUNT_OF_SUBMENU_ITEMS_TO_SHOW) {
          itemLI.classList.add('item--hidden')
          isShowButtonMore = true
        }
      })

      if (!isShowButtonMore) {
        item.querySelector('li.more').style.display = 'none'
      }
    })
  })

  const listSubmenuButtonMore = document.querySelectorAll('.submenu li.more')

  const onClickSubmenuButtonMore = (event) => {
    event.target.classList.toggle('more--expanded')

    const listLI = event.target.closest('ul').querySelectorAll('li.item')

    listLI.forEach((itemLI, index) => {
      if (index > COUNT_OF_SUBMENU_ITEMS_TO_SHOW) {
        itemLI.classList.toggle('item--hidden')
      }
    })
  }

  listSubmenuButtonMore?.forEach((item) => {
    item.addEventListener('click', onClickSubmenuButtonMore)
  })

  // end .mobile-menu .submenu

  // close-catalog-in-header

  const buttonCloseCatalogInHeader = document.querySelector(
    '.close-catalog-in-header',
  )

  const onClickButtonCloseCatalogInHeader = () => {
    document.querySelector('.overlay--main').classList.add('hidden')
    document.querySelector('.popup-toggle.open').classList.remove('open')
  }

  buttonCloseCatalogInHeader?.addEventListener(
    'click',
    onClickButtonCloseCatalogInHeader,
  )

  // end close-catalog-in-header

  //catalog-in-header
  const COUNT_OF_CATALOG_ITEMS_TO_SHOW = 5
  const catalogInHeader = document.querySelector('.catalog-in-header .catalog')
  const listUL = catalogInHeader?.querySelectorAll('ul')

  const buttonCatalogOpen = document.querySelector('.catalog-open')

  const onClickButtonCatalogOpen = () => {
    closePopup()

    document.querySelector('.overlay--main').classList.remove('hidden')
    buttonCatalogOpen.closest('.popup-toggle').classList.toggle('open')
  }

  buttonCatalogOpen?.addEventListener('click', onClickButtonCatalogOpen)

  // свернем в каталоге строки, где больше 10 строк
  // если нет более 10 строк - скроем кнопку ЕЩЕ

  listUL?.forEach((item) => {
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

  const listButtonMore = catalogInHeader?.querySelectorAll('.more')

  listButtonMore?.forEach((item) => {
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
      document.querySelector('.overlay--main').classList.add('hidden')
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

  // certificates-viewer

  const viewerCertificates = document.querySelector('.viewer-certificates')

  if (viewerCertificates) {
    const onClickViewerCertificates = (event) => {
      if (
        event.target.matches('.viewer-certificates button.close') ||
        event.target.matches('.viewer-certificates')
      ) {
        viewerCertificates.hidden = true
      }
    }

    viewerCertificates.addEventListener('click', onClickViewerCertificates)

    const setIndexImages = (value) => {
      let indexImage = +viewerCertificates.dataset.indexImage
      const countImages = +viewerCertificates.dataset.countImages

      if (viewerCertificates.dataset.listImages) {
        const arrayImages = viewerCertificates.dataset.listImages.split(',')

        indexImage += +value

        if (indexImage > countImages - 1) {
          indexImage = 0
        } else if (indexImage < 0) {
          indexImage = countImages - 1
        }

        viewerCertificates.dataset.indexImage = indexImage

        viewerCertificates.querySelector('.certificate-full img').src =
          arrayImages[+indexImage]
      }
    }

    const buttonPrevViewerCertificates =
      viewerCertificates.querySelector('button.prev')

    buttonPrevViewerCertificates.addEventListener('click', () =>
      setIndexImages(-1),
    )

    const buttonNextViewerCertificates =
      viewerCertificates.querySelector('button.next')

    buttonNextViewerCertificates.addEventListener('click', () =>
      setIndexImages(1),
    )

    const listCertificates = document.querySelectorAll(
      '.certificates .certificate',
    )

    if (listCertificates) {
      const openViewerCertificate = (event, listImages) => {
        event.preventDefault()

        const arrayImages = listImages.split(',')

        viewerCertificates.querySelector('.certificate-full img').src =
          arrayImages[0]

        viewerCertificates.hidden = false

        viewerCertificates.dataset.indexImage = 0
        viewerCertificates.dataset.listImages = arrayImages
        viewerCertificates.dataset.countImages = arrayImages.length

        viewerCertificates.querySelector('button.prev').hidden =
          arrayImages.length === 1
        viewerCertificates.querySelector('button.next').hidden =
          arrayImages.length === 1
      }

      const onClickCertificate = (event) => {
        openViewerCertificate(event, event.currentTarget.dataset.images)
      }

      listCertificates.forEach((certificate) => {
        certificate.addEventListener('click', onClickCertificate)
      })
    }
  }
  // END certificates-viewer
}

document.addEventListener('DOMContentLoaded', onLoaded)
