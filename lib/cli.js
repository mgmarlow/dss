const minimist = require('minimist');
const Composition = require('./composition');

function run() {
    const argv = minimist(process.argv.slice(2));
    const composition = createComposition(argv['_']);
};

function createComposition(rawArguments) {
    const subject = getSubject(rawArguments[0]);

    const body = subject
        ? compileBody(rawArguments.slice(1, rawArguments.length))
        : compileBody(rawArguments);

    return new Composition(body, subject);
}

function compileBody(bodyArray) {
    return bodyArray
        .reduce((arr, curr) => `${arr} ${curr}`);
}

function getSubject(arg) {
    return arg[arg.length - 1] === ','
        ? arg.replace(',', '')
        : undefined;
}

module.exports = {
    run,
    createComposition,
    compileBody,
    getSubject
};
