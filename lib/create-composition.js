const Composition = require('./composition')

module.exports = (text, signature) => {
  const { subject, startIndex } = getSubject(text)
  const body = compileBody(text.slice(startIndex, text.length))
  return new Composition(body, subject, signature)
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
      return { subject: subject.join(' '), startIndex: i + 1 }
    }

    subject.push(currentWord)
  }

  // No subject found, ran through whole text without finding comma
  throw new Error('Please provide a subject. e.g. dear <subject>, <letter body>')
}

function endsInComma (word) {
  return word[word.length - 1] === ','
}
