const minimist = require('minimist')
const createComposition = require('./create-composition')

module.exports = () => {
  const argv = minimist(process.argv.slice(2))
  const oArg = getArgumentsObj(argv)
  console.log(argv)
  console.log(oArg)
  const composition = createComposition(oArg.text, oArg.author)
  composition.writeToFile(oArg.template)
}

function getArgumentsObj (rawArguments) {
  return {
    text: rawArguments['_'],
    author: rawArguments['yours,'] || 'truly',
    template: rawArguments['tpl'] || 'basic-letter'
  }
}
