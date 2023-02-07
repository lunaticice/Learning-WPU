const validator = require('validator');
const chalk = require('chalk');

// console.log(validator.isEmail('test@gmail.com'));
// console.log(validator.isMobilePhone('+62812345678', 'id-ID'));
// console.log(validator.isNumeric('+62812345678'));

// console.log(chalk.italic.black.bgBlue('Hello World!'));
const pesan = chalk`Lorem ipsum dolor {bgGreen.black.strikethrough sit amet} consectetur {bgGreen.italic.black adipisicing} elit. Aspernatur, at?`;
console.log(pesan);
