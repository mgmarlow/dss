const fs = require('fs')
const templates = require('./templates')
const user = require('./user')

class Composition {
  constructor (body, subject = 'so and so', author = 'truly') {
    this.subject = subject
    this.body = body
    this.author = author
  }

  writeToFile (template) {
    const dir = user.makeLettersPath()
    const filePath = dir + user.getLetterName(this.subject)

    return new Promise((resolve, reject) => {
      templates.parse(this, template).then(mtpl => {
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
