const minimist = require('minimist')
const createComposition = require('./create-composition')
const Configuration = require('./config')

module.exports = () => {
  const argv = minimist(process.argv.slice(2))
  const oArg = getArgumentsObj(argv)
  const config = new Configuration(oArg.configPath)
  config.load()

  createComposition(oArg.text, oArg.signature || config.signature)
    .writeToFile(oArg.template || config.template, config.compositionsPath)
    .then(fileName => console.log(`Wrote to ${fileName}`))
}

function getArgumentsObj (rawArguments) {
  return {
    configPath: rawArguments['config'],
    text: rawArguments['_'],
    signature: rawArguments['yours,'],
    template: rawArguments['tpl']
  }
}
