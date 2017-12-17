const minimist = require('minimist')
const createComposition = require('./create-composition')
const Configuration = require('./config')
const getFlags = require('./flags')
const list = require('./list')

module.exports = () => {
  const argv = minimist(process.argv.slice(2), { '--': true })
  const flags = getFlags(argv)
  const config = new Configuration(flags.letter.configPath)
  config.load()

  if (valuesPresent(flags.util)) {
    runUtilCommand(flags.util, config)
  } else {
    // TODO: Refactor default config values
    const signature = flags.letter.signature || config.signature
    const template = flags.letter.template || config.template
    createComposition(flags.letter.text, signature)
      .writeToFile(template, config.compositionsPath)
      .then(fileName => console.log(`Wrote to ${fileName}`))
  }
}

function valuesPresent (obj) {
  const isPresent = Object.keys(obj)
    .map(key => obj[key])
    .findIndex(value => value != null)
  return isPresent !== -1
}

function runUtilCommand (utilFlags, config) {
  if (utilFlags.list) {
    list(config.compositionsPath, utilFlags.all)
      .then(contents => contents.forEach(c => console.log(c)))
  }
}
