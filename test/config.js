const test = require('tape')
const Configuration = require('../lib/config')

test('configuration should error if provided config file cannot be found', t => {
  t.plan(1)
  t.throws(() => {
    const config = new Configuration('./some-misc-path.config.json')
    config.load()
  }, /Could not read configuration file .\/some-misc-path.config.json/)
})

test('configuration should read signature from external file', t => {
  t.plan(1)
  const config = new Configuration('./test/files/config.json')
  config.load()
  t.equal(config.signature, 'Holmes, cool guy.')
})
