// const fs = require('fs'); // core module
// const moment = require('moment'); //third party model / npm module / node_modules

const sub = require('./sub'); // local module
console.log(sub.printName('Luna'), sub.PI, sub.characters.printCharacters(), new sub.People());
