const fs = require('fs')
const path = require('path')
const asyncMap = require('async/map')

module.exports = (compositionsPath, listContents) => {
  const readContents = (filePath, cb) => {
    const fullPath = path.join(compositionsPath, filePath)
    fs.readFile(fullPath, { encoding: 'utf-8' }, (err, data) => {
      cb(err, `${filePath}\n${data}\n\n`)
    })
  }

  return new Promise((resolve, reject) => {
    fs.readdir(compositionsPath, (err, files) => {
      if (err) {
        reject(new Error('Compositions directory does not exist'))
      }

      if (!listContents) {
        resolve(files)
      } else {
        asyncMap(files, readContents, (err, results) => {
          if (err) {
            throw new Error(err)
          }
          resolve(results)
        })
      }
    })
  })
}
