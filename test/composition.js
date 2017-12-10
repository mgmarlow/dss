const test = require('tape')
const Composition = require('../lib/composition')

test('composition should set subject, body, and signature', t => {
  t.plan(3)
  const comp = new Composition('Hello.', 'Beatrice', 'Benedick')
  t.equal(comp.body, 'Hello.')
  t.equal(comp.subject, 'Beatrice')
  t.equal(comp.signature, 'Benedick')
})

test('composition leterName should turn subject into filename', t => {
  t.plan(1)
  const subject = 'Beatrice'
  const comp = new Composition('Hello.', subject, 'Benedick')
  t.assert(comp.letterName.includes(subject))
})

test('composition letterName should timestamp', t => {
  t.plan(1)
  const comp = new Composition('Hello.', 'Beatrice', 'Benedick')
  const now = new Date().toLocaleDateString().replace('/', '-')
  t.assert(comp.letterName.includes(now))
})

test('composition letterName outputs as txt', t => {
  t.plan(1)
  const comp = new Composition('Hello.', 'Beatrice', 'Benedick')
  const letter = comp.letterName
  t.equal(letter.substring(letter.length - 4, letter.length), '.txt')
})

test('composition should set spaces in subject name to dashes', t => {
  t.plan(1)
  const subject = 'Don John'
  const comp = new Composition('Hello.', subject, 'Benedick')
  t.assert(comp.letterName.includes(subject.replace(' ', '-')))
})
