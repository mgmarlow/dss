const fs = require('fs')

module.exports = (original, extension) => {
  let tries = 1
  let newPath = original

  do {
    newPath = `${original.substring(0, original.length - extension.length)}(${tries})${extension}`
    tries++
  } while (fs.existsSync(newPath))

  return newPath
}
