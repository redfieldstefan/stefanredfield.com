const minimalView = ((id) => {
  const urlSearchParams = new URLSearchParams(window.location.search)
  const { minimal } = Object.fromEntries(urlSearchParams.entries())

  if (minimal) {
    const headers = document.getElementsByTagName('header')

    for (let element of headers) {
      element.remove()
    }
  }
})()

export default minimalView
