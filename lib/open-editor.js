const { spawn } = require('child_process')
const getLetterName = require('./get-letter-name')
const path = require('path')

module.exports = (filename, dir) => {
  // TODO: ID for running multiple times same day
  const filePath = path.resolve(dir, getLetterName(filename))
  const editor = process.env.EDITOR || 'vim'

  return new Promise((resolve, reject) => {
    const child = spawn(editor, [filePath], {
      stdio: 'inherit'
    })

    child.on('exit', (e, code) => {
      resolve(filePath)
    })
  })
}
