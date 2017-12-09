const test = require('tape')
const createComposition = require('../lib/create-composition')

test('composition should properly parse body text', t => {
  t.plan(1)
  const rawArgs = { '_': ['Beatrice,', 'Then', 'is', 'courtesy', 'a', 'turncoat.'] }
  const text = rawArgs['_']
  const composition = createComposition(text)
  t.equal(composition.body, 'Then is courtesy a turncoat.')
})

test('composition should add subject and body', t => {
  t.plan(1)
  const rawArgs = { '_': ['Beatrice,', 'Then', 'is', 'courtesy', 'a', 'turncoat.'] }
  const text = rawArgs['_']
  const composition = createComposition(text)
  t.equal(composition.subject, 'Beatrice')
})

test('composition should allow for multi-word subjects', t => {
  t.plan(1)
  const rawArgs = { '_': ['Jane', 'Doe,', 'Then', 'is', 'courtesy', 'a', 'turncoat.'] }
  const text = rawArgs['_']
  const composition = createComposition(text)
  t.equal(composition.subject, 'Jane Doe')
})

test('composition should throw exception if no subject provided', t => {
  t.plan(1)
  const rawArgs = { '_': ['Then', 'is', 'courtesy', 'a', 'turncoat.'] }
  const text = rawArgs['_']
  t.throws(() => {
    createComposition(text)
  }, /Please provide a subject. e.g. dear <subject>, <letter body>/)
})

test('composition should provide author if --yours flag is provided', t => {
  t.plan(1)
  const rawArgs = {
    '_': ['Beatrice,', 'Then', 'is', 'courtesy', 'a', 'turncoat.'],
    'yours,': 'Benedick'
  }
  const text = rawArgs['_']
  const author = rawArgs['yours,']
  const composition = createComposition(text, author)
  t.equal(composition.author, 'Benedick')
})

test('composition should provide default author "truly"', t => {
  t.plan(1)
  const rawArgs = {
    '_': ['Beatrice,', 'Then', 'is', 'courtesy', 'a', 'turncoat.']
  }
  const text = rawArgs['_']
  const composition = createComposition(text)
  t.equal(composition.author, 'truly')
})
