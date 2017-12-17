const fs = require('fs')
const asyncMap = require('async/map')

module.exports = (compositionsPath, listContents) => {
  readContents = (filePath) => {
    const fullPath = compositionsPath + filePath
    fs.readFile(fullPath, { encoding: 'utf-8' }, (err, data) => {
      if (err) {
        console.log(err)
      }

      console.log(filePath)
      console.log(data)
      console.log('\n')
    })
  };

  return new Promise((resolve, reject) => {
    fs.readdir(compositionsPath, (err, files) => {
      if (err) {
        throw new Error(`Compositions directory does not exist, please
                        check that %usr%/stationery/compositions/ is a
                        valid directory`)
      }
      console.log(`Listing contents of ${compositionsPath}:\n`)

      if (listContents) {
        asyncMap(files, readContents)
      } else {
        files.forEach(file => console.log(file))
      }
    })
  })
}
