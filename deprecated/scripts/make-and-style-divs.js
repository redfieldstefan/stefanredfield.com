const makeAndStyleDivs = ({ min = 1, max = 1, target }, format) => {
  const body = target || document.getElementsByTagName('body')[0]
  const howManyBlockyOnes = Math.floor(Math.random() * (max - min) + min)
  const newBlockyArray = new Array(howManyBlockyOnes).fill(null)

  const newBlockyOnes = newBlockyArray.map(() => {
    const newDiv = document.createElement('div')

    format && format(newDiv)

    return newDiv
  })

  newBlockyOnes.forEach((one) => body.appendChild(one))

  return
}

window.makeAndStyleDivs = makeAndStyleDivs

export default makeAndStyleDivs
