const fs = require('fs')
const parseTemplate = require('./parse-template')
const conf = require('./config')

class Composition {
  constructor (body, subject = 'so and so', author = 'truly') {
    this.subject = subject
    this.body = body
    this.author = author
  }

  writeToFile (template) {
    const dir = conf.makeLettersPath()
    const filePath = dir + conf.getLetterName(this.subject)

    return new Promise((resolve, reject) => {
      parseTemplate(this, template).then(mtpl => {
        fs.writeFile(filePath, mtpl, err => {
          if (err) reject(err)
          console.log(`Created composition at ${filePath}`)
          resolve(true)
        })
      })
    })
  }
}

module.exports = Composition
