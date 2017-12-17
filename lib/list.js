const fs = require('fs')
const asyncMap = require('async/map')

module.exports = (compositionsPath, listContents) => {
  const readContents = (filePath, cb) => {
    const fullPath = compositionsPath + filePath
    fs.readFile(fullPath, { encoding: 'utf-8' }, (err, data) => {
      cb(err, `${filePath}\n${data}\n\n`)
    })
  }

  return new Promise((resolve, reject) => {
    fs.readdir(compositionsPath, (err, files) => {
      if (err) {
        throw new Error(`Compositions directory does not exist, please
                        check that %usr%/stationery/compositions/ is a
                        valid directory`)
      }

      console.log(`Listing contents of ${compositionsPath}:\n`)
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
