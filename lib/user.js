const fs = require('fs');

makeLettersPath = () => {
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

const getConfigPath = () => {
    return process.env.USERPROFILE + '\\.dear-sns-config';
}

const getLetterName = (filename) => {
    filename = filename.replace(/s/g, '-');
    const now = new Date().toLocaleDateString().replace('/', '-');
    return `${filename}-${now}.txt`;
}

module.exports = {
    makeLettersPath,
    getConfigPath,
    getLetterName
};
