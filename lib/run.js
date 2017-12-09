const minimist = require('minimist')
const createComposition = require('./create-composition')
const Configuration = require('./config')

module.exports = () => {
  const argv = minimist(process.argv.slice(2))
  const oArg = getArgumentsObj(argv)
  const config = new Configuration(oArg.config)

  createComposition(oArg.text, oArg.author)
    .writeToFile(oArg.template, config)
    .then(fileName => console.log(`Wrote to ${fileName}`))
}

function getArgumentsObj (rawArguments) {
  return {
    text: rawArguments['_'],
    author: rawArguments['yours,'] || 'truly',
    template: rawArguments['tpl'] || 'basic-letter',
    config: rawArguments['config']
  }
}
