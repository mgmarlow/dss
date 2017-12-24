const fs = require('fs')

module.exports = (original, extension) => {
  let tries = 1
  let newPath = original
  const existingParenIndex = original.indexOf('(')

  do {
    if (existingParenIndex !== -1) {
      newPath = replaceAt(original, existingParenIndex + 1, tries)
    } else {
      newPath = `${original.substring(0, original.length - extension.length)}(${tries})${extension}`
    }
    tries++
  } while (fs.existsSync(newPath))

  return newPath
}

function replaceAt (str, index, chr) {
  if (index > str.length - 1) return str
  return str.substr(0, index) + chr + str.substr(index + 1)
}
