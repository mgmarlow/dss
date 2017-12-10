const test = require('tape')
const parseTemplate = require('../lib/parse-template')

test('parse should fill in mustache keywords on basic letter tpl', t => {
  t.plan(3)
  const tpl = 'basic-letter'
  const comp = { subject: 'Beatrice', body: 'Hello.', signature: 'Benedick' }
  parseTemplate(comp, tpl).then(mtpl => {
    t.assert(mtpl.includes('Beatrice'), 'subject')
    t.assert(mtpl.includes('Hello.'), 'body')
    t.assert(mtpl.includes('Benedick'), 'signature')
  })
})

test('parse should load template from external file if ends in .mustache', t => {
  t.plan(3)
  const tpl = 'test/files/template.mustache'
  const comp = { subject: 'Beatrice', body: 'Hello.', signature: 'Benedick' }
  parseTemplate(comp, tpl).then(mtpl => {
    t.assert(mtpl.includes('Beatrice'), 'subject')
    t.assert(mtpl.includes('Dearest'), 'greeting')
    t.assert(!mtpl.includes('Benedick'), 'no signature')
  })
})
