const fs = require('fs');
const Mustache = require('mustache');

const parse = (composition, tpl) => {
    return new Promise((resolve, reject) => {
        const tplPath = `./templates/${tpl}.mustache`;
        fs.readFile(tplPath, 'utf-8', (err, data) => {
            if (err) reject(err);
            const text = Mustache.render(data, composition)
            resolve(text);
        });
    });
};

module.exports = {
    parse
};
