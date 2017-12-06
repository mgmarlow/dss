const minimist = require('minimist')
const Composition = require('./composition')
const conf = require('./config')

module.exports = {
  run,
  createComposition
}

function run () {
  const argv = minimist(process.argv.slice(2))
  if (isConfigArg(argv)) {
    console.log(argv)
  } else {
    const composition = createComposition(argv)
    const template = getTemplate(argv['tpl'])
    composition.writeToFile(template)
  }
};

function isConfigArg (argv) {
  const configArgIndex = Object.keys(argv)
    .findIndex(a => conf.configFlags.includes(a))
  return configArgIndex !== -1
}

function createComposition (rawArguments) {
  const text = rawArguments['_']
  const subject = getSubject(text[0])

  const body = subject
    ? compileBody(text.slice(1, rawArguments.length))
    : compileBody(text)

  const author = rawArguments['yours,']

  return new Composition(body, subject, author)
}

function compileBody (bodyArray) {
  return bodyArray
    .reduce((arr, curr) => `${arr} ${curr}`)
}

function getSubject (arg) {
  return arg[arg.length - 1] === ','
    ? arg.replace(',', '')
    : undefined
}

function getTemplate (templateArgument) {
  return templateArgument || 'basic-letter'
}
