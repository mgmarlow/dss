const test = require('tape')
const minimist = require('minimist')
const getFlags = require('../lib/flags')

test('getFlags should find list arg', t => {
  t.plan(1)
  const raw = ['--ls']
  const argv = minimist(raw, { '--': true })
  const flags = getFlags(argv)
  t.assert(flags.util.list)
})

test('getFlags should pick up entire signature', t => {
  t.plan(1)
  const raw = ['this', 'is', 'a', 'test', '--', 'Don,', 'Jo--hn.']
  const argv = minimist(raw, { '--': true })
  const flags = getFlags(argv)
  t.equal(flags.letter.signature, 'Don, Jo--hn.')
})

test('getFlags should find config', t => {
  t.plan(1)
  const raw = ['this', 'is', 'a', 'test', '--config', './my-config.json']
  const argv = minimist(raw, { '--': true })
  const flags = getFlags(argv)
  t.equal(flags.letter.configPath, './my-config.json')
})

test('getFlags should find template', t => {
  t.plan(1)
  const raw = ['this', 'is', 'a', 'test', '--tpl', 'formal-letter']
  const argv = minimist(raw, { '--': true })
  const flags = getFlags(argv)
  t.equal(flags.letter.template, 'formal-letter')
})

test('getFlags should find signature even with other args in front of it', t => {
  t.plan(3)
  const raw = ['this', 'is', 'a', 'test', '--config', './myconf.json', '--tpl', 'formal-letter', '--', 'Benedick']
  const argv = minimist(raw, { '--': true })
  const flags = getFlags(argv)
  t.equal(flags.letter.configPath, './myconf.json')
  t.equal(flags.letter.template, 'formal-letter')
  t.equal(flags.letter.signature, 'Benedick')
})

test('getFlags should error if any argument is provided after signature', t => {
  t.plan(1)
  const raw = ['this', 'is', 'a', 'test', '--', 'Don', 'John', '--tpl', 'formal-letter']
  const argv = minimist(raw, { '--': true })
  t.throws(() => {
    getFlags(argv)
  }, /All arguments must come before signature/)
})
