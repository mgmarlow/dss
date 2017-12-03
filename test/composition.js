const test = require('tape');
const cli = require('../lib/cli');

test('composition should properly parse body text', t => {
    t.plan(1);
    const rawArgs = { '_': ['Beatrice,', 'Then', 'is', 'courtesy', 'a', 'turncoat.'] };
    const composition = cli.createComposition(rawArgs);
    t.equal(composition.body, 'Then is courtesy a turncoat.');
});

test('composition should add subject and body', t => {
    t.plan(1);
    const rawArgs = { '_': ['Beatrice,', 'Then', 'is', 'courtesy', 'a', 'turncoat.'] };
    const composition = cli.createComposition(rawArgs);
    t.equal(composition.subject, 'Beatrice');
});

test('composition should give default subject if none provided', t => {
    t.plan(1);
    const rawArgs = { '_': ['Then', 'is', 'courtesy', 'a', 'turncoat.'] };
    const composition = cli.createComposition(rawArgs);
    t.equal(composition.subject, 'so and so');
});

test('composition should provide author if --yours flag is provided', t => {
    t.plan(1);
    const rawArgs = {
        '_': ['Beatrice,', 'Then', 'is', 'courtesy', 'a', 'turncoat.'],
        'yours,': 'Benedick'
    };
    const composition = cli.createComposition(rawArgs);
    t.equal(composition.author, 'Benedick');
});

test('composition should provide default author "truly"', t => {
    t.plan(1);
    const rawArgs = {
        '_': ['Beatrice,', 'Then', 'is', 'courtesy', 'a', 'turncoat.']
    };
    const composition = cli.createComposition(rawArgs);
    t.equal(composition.author, 'truly');
});
