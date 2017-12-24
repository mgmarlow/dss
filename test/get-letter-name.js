const test = require('tape')
const getLetterName = require('../lib/get-letter-name')

test('should include title', t => {
  t.plan(1)
  const name = getLetterName('test')
  t.assert(name.includes('test'))
})

test('should append date to title', t => {
  t.plan(1)
  const name = getLetterName('test')
  const now = new Date().toLocaleDateString().replace('/', '-')
  t.assert(name.includes(now))
})
