const onLoaded = () => {
  // accordion

  const accordions = document.querySelectorAll('.accordion')

  const onClickAccordionItem = function (event) {
    const accordionItem = event.target.closest('.item')
    accordionItem?.classList.toggle('item--open')
  }

  accordions?.forEach((item) => {
    item.addEventListener('click', onClickAccordionItem)
  })
}

document.addEventListener('DOMContentLoaded', onLoaded)
