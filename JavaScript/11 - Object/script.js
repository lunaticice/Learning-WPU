// Membuat Object
// Object Literal
// let character1 = {
//   name: 'Raiden Shogun',
//   type: 'Electro',
//   region: 'Inazuma',
//   race: 'Archon',
// };

// let character2 = {
//   name: 'Jean',
//   type: 'Anemo',
//   region: 'Mondstadt',
//   race: 'Human',
// };

// Function Declaration
// function createCharacter(name, type, region, race) {
//   let character = {};
//   character.name = name;
//   character.type = type;
//   character.region = region;
//   character.race = race;
//   return character;
// }

// let character = createCharacter('Raiden Shogun', 'Electro', 'Inazuma', 'Archon');

// console.log(character);

// Constructor
function Character(name, type, region, race) {
  this.name = name;
  this.type = type;
  this.region = region;
  this.race = race;
}

let character = new Character('Raiden Shogun', 'Electro', 'Inazuma', 'Archon');

console.log(character);
