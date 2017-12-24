const { spawn } = require('child_process')
const path = require('path')
const readline = require('readline')
const fs = require('fs')
const getLetterName = require('./get-letter-name')
const amendFilename = require('./amend-duplicate-filename')

const editor = process.env.EDITOR || 'vim'

module.exports = (filename, dir) => {
  return prompt(dir)
}

function prompt (dir) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  return new Promise((resolve, reject) => {
    rl.question('Name your composition: ', name => {
      rl.close()
      name = name.toString().trim()
      const filename = name || 'new-composition'
      openEditor(filename, dir)
        .then(path => resolve(path))
    })
  })
}

function openEditor (filename, dir) {
  let filePath = path.join(dir, getLetterName(filename))
  if (fs.existsSync(filePath)) {
    filePath = amendFilename(filePath, '.txt')
  }

  return new Promise((resolve, reject) => {
    const child = spawn(editor, [filePath], {
      stdio: 'inherit'
    })

    child.on('exit', (e, code) => {
      resolve(filePath)
    })
  })
}
