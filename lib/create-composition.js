const Composition = require('./composition')

module.exports = (text, author) => {
  const subject = getSubject(text)

  const body = subject
    ? compileBody(text.slice(1, text.length))
    : compileBody(text)

  return new Composition(body, subject, author)
}

function compileBody (bodyArray) {
  return bodyArray
    .reduce((arr, curr) => `${arr} ${curr}`)
}

function getSubject (rawTextArray) {
  const subject = []
  for (let i = 0; i < rawTextArray.length; i++) {
    const currentWord = rawTextArray[i]
    if (endsInComma(currentWord)) {
      // Strip comma before pushing
      subject.push(currentWord.substring(0, currentWord.length - 1))
      return subject.join(' ')
    } else {
      subject.push(currentWord)
    }
  }

  // No subject found, ran through whole text without finding comma
  throw new Error('Please provide a subject. e.g. dear <subject>, <letter body>')
}

function endsInComma (word) {
  return word[word.length - 1] === ','
}
