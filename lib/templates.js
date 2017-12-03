const fs = require('fs');
const Mustache = require('mustache');

const parseTemplate = (composition) => {
    return new Promise((resolve, reject) => {
        fs.readFile('./templates/basic-letter.mustache', 'utf-8', (err, data) => {
            if (err) reject(err);
            const text = Mustache.render(data, composition)
            resolve(text);
        });
    });
};

module.exports = {
    parseTemplate
};
