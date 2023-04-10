import hexContrastColor from 'hex-contrast-color'
import rgbHex from 'rgb-hex'

const findBackgroundColor = (element) => {
  const backgroundColor = window
    .getComputedStyle(element)
    .getPropertyValue('background-color')
  const hex = rgbHex(backgroundColor)
  const isClear = hex === '00000000'

  if (isClear && element.parentElement) {
    return findBackgroundColor(element.parentElement)
  }

  return `#${hex}`
}

const textify = ((id) => {
  const texts = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'a']
    .map((tag) => document.getElementsByTagName(tag))
    .filter((arr) => arr.length)

  texts.forEach((group) => {
    for (let element of group) {
      const color = hexContrastColor(findBackgroundColor(element))
      element.style.color = color
    }

    return
  })
})()

export default textify
