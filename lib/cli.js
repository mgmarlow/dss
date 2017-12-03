const minimist = require('minimist');
const Composition = require('./composition');

function run() {
    const argv = minimist(process.argv.slice(2));
    const composition = createComposition(argv['_']);
};

function createComposition(rawArguments) {
    let subject, body;

    if (isSubject(rawArguments[0])) {
        subject = rawArguments[0].replace(':', '');
        body = compileBody(rawArguments.slice(1, rawArguments.length));
    } else {
        body = compileBody(rawArguments);
    }

    return new Composition(body, subject);
}

function compileBody(bodyArray) {
    return bodyArray
        .reduce((arr, curr) => `${arr} ${curr}`);
}

function isSubject(arg) {
    return arg[arg.length - 1] === ':';
}

module.exports = {
    run,
    createComposition,
    compileBody,
    isSubject
};
