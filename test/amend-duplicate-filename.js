const test = require('tape')
const amendFilename = require('../lib/amend-duplicate-filename')

test('amendFilename should append numbers to duplicate filenames', t => {
  t.plan(1)
  const originalFilename = './test/all.js'
  const newFilename = amendFilename(originalFilename, '.js')
  t.equal(newFilename, './test/all(1).js')
})
