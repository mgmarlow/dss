const Composition = require('./composition')

module.exports = (text, author) => {
  const subject = getSubject(text[0])

  const body = subject
    ? compileBody(text.slice(1, text.length))
    : compileBody(text)

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
