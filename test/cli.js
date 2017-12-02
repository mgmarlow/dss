var test = require('tape');
var cli = require('../lib/cli');

test('cli run returns 0', t => {
    t.plan(1);
    t.equal(cli.run(), 0);
});
