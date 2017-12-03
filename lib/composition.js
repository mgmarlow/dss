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
        const file = dir + user.getLetterName(this.author);
        return new Promise((resolve, reject) => {
            fs.writeFile(file, templates.basicLetter(this), err => {
                if (err) reject(err);
                console.log(`Created composition at ${file}`);
                resolve(true);
            });
        });
    }
}

module.exports = Composition;