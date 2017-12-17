const path = require('path')
const test = require('tape')
const list = require('../lib/list')

const compositionsPath = path.resolve('./test/files/compositions/')
const fileNames = ['Beatrice-2017-12-10.txt', 'Beatrice-2017-12-9.txt']

test('list should return filenames of compositions directory', t => {
  t.plan(2)
  list(compositionsPath, false)
    .then(files => {
      t.equal(files.length, 2)
      t.same(files, fileNames)
    })
})

test('list should reject error when compositions dir not found', t => {
  t.plan(1)
  list('', false)
    .catch(e => {
      t.equal(e.message, 'Compositions directory does not exist')
    })
})

test('list all should include composition body', t => {
  t.plan(1)
  list(compositionsPath, true)
    .then(files => {
      t.assert(files[0].includes('Dear'))
    })
})
