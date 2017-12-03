const fs = require('fs');
const templates = require('./templates');
const user = require('./user');

class Composition {
    constructor(body, subject = 'so and so', author = 'truly') {
        this.subject = subject;
        this.body = body;
        this.author = author;
    }

    writeToFile() {
        const dir = user.makeLettersPath();
        const file = dir + user.getLetterName(this.subject);
        return new Promise((resolve, reject) => {
            // TODO: Support different templates
            templates.parseTemplate(this).then(mtpl => {
                fs.writeFile(file, mtpl, err => {
                    if (err) reject(err);
                    console.log(`Created composition at ${file}`);
                    resolve(true);
                });
            });
        });
    }
}

module.exports = Composition;