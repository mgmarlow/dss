const fs = require('fs')

class Configuration {
  constructor (filePath = null) {
    this.filePath = filePath
  }

  get configPath () {
    if (this.filePath) {
      return this.filePath
    } else {
      return process.env.USERPROFILE + '\\stationery.config.json'
    }
  }

  get compositionsPath () {
    const dirs = ['stationery', 'compositions']

    let path = process.env.USERPROFILE + '\\'
    dirs.forEach(dir => {
      path += dir + '\\'
      if (!fs.existsSync(path)) {
        fs.mkdirSync(path)
      }
    })

    return path
  }
}

module.exports = Configuration
