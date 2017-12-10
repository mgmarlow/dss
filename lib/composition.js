const fs = require('fs')
const parseTemplate = require('./parse-template')

class Composition {
  constructor (body, subject, signature) {
    this.subject = subject
    this.body = body
    this.signature = signature
  }

  get letterName () {
    const filename = this.subject.replace(/\s/g, '-')
    const now = new Date().toLocaleDateString().replace('/', '-')
    return `${filename}-${now}.txt`
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
