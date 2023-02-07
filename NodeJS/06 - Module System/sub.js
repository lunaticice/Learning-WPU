function printName(name) {
  return `Hello, my name is ${name}`;
}

const PI = 3.14;

const characters = {
  name: 'Jade',
  type: 'INT',
  race: 'Human',
  printCharacters() {
    return `${this.name}`;
  },
};

class People {
  constructor() {
    console.log('People created');
  }
}

// module.exports.printName = printName;
// module.exports.PI = PI;
// module.exports.characters = characters;
// module.exports.People = People;

// module.exports = {
//   printName: printName,
//   PI: PI,
//   characters: characters,
//   People: People
// }

module.exports = { printName, PI, characters, People };
