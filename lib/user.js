const fs = require('fs');

module.exports = {
    makeLettersPath,
    getConfigPath,
    getLetterName
};

function makeLettersPath() {
    const dirs = ['dear-sns', 'compositions'];

    let path = process.env.USERPROFILE + '\\';
    dirs.forEach(dir => {
        path += dir + '\\';
        if (!fs.existsSync(path)) {
            fs.mkdirSync(path);
        }
    });

    return path;
}

function getConfigPath() {
    return process.env.USERPROFILE + '\\.dear-sns-config';
}

function getLetterName(filename) {
    const now = new Date().toLocaleDateString().replace('/', '-');
    return `${filename}-${now}.txt`;
}
