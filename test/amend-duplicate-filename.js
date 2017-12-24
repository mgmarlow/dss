const test = require('tape')
const amendFilename = require('../lib/amend-duplicate-filename')

test('amendFilename should append numbers to duplicate filenames', t => {
  t.plan(1)
  const originalFilename = './test/all.js'
  const newFilename = amendFilename(originalFilename, '.js')
  t.equal(newFilename, './test/all(1).js')
})

test('amendFilename should increment numbers to duplicate filenames', t => {
  t.plan(1)
  const originalFilename = './test/files/config(1).json'
  const newFilename = amendFilename(originalFilename, '.json')
  t.equal(newFilename, './test/files/config(2).json')
})

test('amendFilename should work with any extension', t => {
  t.plan(2)
  const jsFile = amendFilename('./test/all.js', '.js')
  const templateFile = amendFilename('./test/files/template.mustache', '.mustache')
  t.equal(jsFile, './test/all(1).js')
  t.equal(templateFile, './test/files/template(1).mustache')
})
