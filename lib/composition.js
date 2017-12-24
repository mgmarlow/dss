const fs = require('fs')
const parseTemplate = require('./parse-template')
const getLetterName = require('./get-letter-name')

class Composition {
  constructor (body, subject, signature) {
    this.subject = subject
    this.body = body
    this.signature = signature
  }

  get letterName () {
    return getLetterName(this.subject)
  }

  writeToFile (template, dir) {
    const filePath = dir + this.letterName

    return new Promise((resolve, reject) => {
      parseTemplate(this, template).then(mtpl => {
        fs.writeFile(filePath, mtpl, err => {
          if (err) reject(err)
          resolve(filePath)
        })
      })
    })
  }
}

module.exports = Composition
