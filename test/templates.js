const test = require('tape')
const parseTemplate = require('../lib/templates')

test('parse should fill in mustache keywords on basic letter tpl', t => {
  t.plan(3)
  const tpl = 'basic-letter'
  const comp = { subject: 'Beatrice', body: 'Hello.', author: 'Benedick' }
  parseTemplate(comp, tpl).then(mtpl => {
    t.assert(mtpl.includes('Beatrice'))
    t.assert(mtpl.includes('Hello.'))
    t.assert(mtpl.includes('Benedick'))
  })
})
