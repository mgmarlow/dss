const fs = require('fs')
const path = require('path')
const Mustache = require('mustache')

module.exports = (composition, tpl) => {
  return new Promise((resolve, reject) => {
    const tplPath = getTemplatePath(tpl)
    fs.readFile(tplPath, 'utf-8', (err, data) => {
      if (err) reject(err)
      const text = Mustache.render(data, composition)
      resolve(text)
    })
  })
}

function getTemplatePath (template) {
  if (isPath(template)) {
    return template
  } else {
    return path.join(__dirname, `../templates/${template}.mustache`)
  }
}

function isPath (template) {
  return template.indexOf('.mustache') !== -1
}
