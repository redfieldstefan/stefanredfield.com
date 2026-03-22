import fs from 'fs'

fs.readdir('./', (err, files) => {
  let linksArray = []

  files.forEach((file) => {
    if (file.includes('.html')) {
      linksArray = [...linksArray, file]
    }
  })

  fs.writeFile(
    './data/links.json',
    JSON.stringify({ pages: linksArray }),
    {},
    () => {}
  )
})
