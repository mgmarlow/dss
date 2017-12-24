const fs = require('fs')

class Configuration {
  constructor (filePath) {
    if (filePath && !fs.existsSync(filePath)) {
      throw new Error(`Could not read configuration file ${filePath}`)
    }

    this.configPath = filePath || process.env.USERPROFILE + '\\.stationeryconfig'
    this.signature = 'truly'
    this.template = 'basic-letter'
    this.load()
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

  load () {
    if (!fs.existsSync(this.configPath)) return
    const fileContents = fs.readFileSync(this.configPath, 'utf8')
    const configData = JSON.parse(fileContents)
    this.signature = configData.signature
  }
}

module.exports = Configuration
