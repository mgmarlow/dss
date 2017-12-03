const fs = require('fs');
const templates = require('./templates');

class Composition {
    constructor(body, subject = 'so and so', author = 'truly') {
        this.subject = subject;
        this.body = body;
        this.author = author;
    }

    writeToFile(filename) {
        return new Promise((resolve, reject) => {
            fs.writeFile(filename, templates.basicLetter(this), err => {
                if (err) reject(err);
                console.log(`Created composition at ${filename}`);
                resolve(true);
            });
        });
    }
}

module.exports = Composition;