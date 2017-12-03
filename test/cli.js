var test = require('tape');
var cli = require('../lib/cli');

test('create composition adds subject and body', t => {
    t.plan(2);
    const rawArgs = ['Beatrice:', 'Then', 'is', 'courtesy', 'a', 'turncoat.'];
    const composition = cli.createComposition(rawArgs);
    t.equal(composition.subject, 'Beatrice');
    t.equal(composition.body, 'Then is courtesy a turncoat.');
});

test('create composition gives default subject if none provided', t => {
    t.plan(2);
    const rawArgs = ['Then', 'is', 'courtesy', 'a', 'turncoat.'];
    const composition = cli.createComposition(rawArgs);
    t.equal(composition.subject, 'so and so');
    t.equal(composition.body, 'Then is courtesy a turncoat.');
});
