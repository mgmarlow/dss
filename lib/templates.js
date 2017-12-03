const basicLetter = (composition) => `
Dear ${composition.subject},

${composition.body}

Yours,
${composition.author}
`;

module.exports = {
    basicLetter
};
