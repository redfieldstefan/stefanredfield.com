import makeAndStyleDivs from './make-and-style-divs'

const randomWholeNum = (max = 0) => {
  return Math.floor(Math.random() * max)
}

const blockyGriddyPatterny = (() => {
  const min = 10
  const max = 20
  const maxY = window.innerHeight
  const maxX = window.innerWidth

  makeAndStyleDivs({ max, min }, (div) => {
    const myShadow = `0px 0px ${randomWholeNum(50)}px ${randomWholeNum(
      100
    )}px rgb(0, 0, 0)`

    div.className = 'blocky-one'
    div.style.cssText = `
      position: absolute;
      top: ${randomWholeNum(maxY)};
      right: ${randomWholeNum(maxX)};
      height: ${randomWholeNum(500)};
      transform: skew(${randomWholeNum(360)}deg);
      box-shadow: ${myShadow};
      -webkit-box-shadow:${myShadow};
      -moz-box-shadow: ${myShadow};
    `

    return div
  })

  return
})()

export default blockyGriddyPatterny
