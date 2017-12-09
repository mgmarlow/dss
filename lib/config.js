const fs = require('fs')

module.exports = {
  configFlags: [
    'config'
  ],
  makeLettersPath,
  getConfigPath,
  getLetterName
}

function makeLettersPath () {
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

function getConfigPath () {
  return process.env.USERPROFILE + '\\stationery.config.json'
}

function getLetterName (filename) {
  filename = filename.replace(/\s/g, '-')
  const now = new Date().toLocaleDateString().replace('/', '-')
  return `${filename}-${now}.txt`
}