// JS Object
// 1. Object Literal
// let characters = {
//   name: 'Mephistopheles',
//   type: 'Human',
//   cp: 65000,
//   level: 181,
//   levelUp: function () {
//     this.level += 1;
//     this.cp += 1250;
//     console.log(`Congratulations, ${this.name} has leveled up to level ${this.level}.`);
//   },
// };

// let characters2 = {
//   name: 'Jade',
//   type: 'Human',
//   cp: 40000,
//   level: 140,
//   levelUp: function () {
//     this.level += 1;
//     this.cp += 1250;
//     console.log(`Congratulations, ${this.name} has leveled up to level ${this.level}.`);
//   },
// };

// 2. Function Declaration
// function Characters(name, type, cp, level) {
//   let characters = {};
//   characters.name = name;
//   characters.type = type;
//   characters.cp = cp;
//   characters.level = level;
//   characters.levelUp = function () {
//     this.level += 1;
//     this.cp += 1250;
//     console.log(`Congratulations, ${this.name} has leveled up to level ${this.level}.`);
//   };

//   return characters;
// }

// let characters = Characters('Mephistopheles', 'Human', 65000, 181);
// let characters2 = Characters('Jade', 'Human', 40000, 140);

// 3. Constructor Function (keyword new)
// function Characters(name, type, cp, level) {
//   this.name = name;
//   this.type = type;
//   this.cp = cp;
//   this.level = level;
//   this.levelUp = function () {
//     this.level += 1;
//     this.cp += 1250;
//     console.log(`Congratulations, ${this.name} has leveled up to level ${this.level}.`);
//   };
// }

// let characters = new Characters('Mephistopheles', 'Human', 65000, 181);
// let characters2 = new Characters('Jade', 'Human', 40000, 140);

// 4. Object Create
// const methodCharacter = {
//   levelUp: function () {
//     this.level += 1;
//     this.cp += 1250;
//     console.log(`Congratulations, ${this.name} has leveled up to level ${this.level}.`);
//   },
// };

// function Characters(name, type, cp, level) {
//   let characters = Object.create(methodCharacter);
//   characters.name = name;
//   characters.type = type;
//   characters.cp = cp;
//   characters.level = level;

//   return characters;
// }

// let characters = Characters('Mephistopheles', 'Human', 65000, 181);
// let characters2 = Characters('Jade', 'Human', 40000, 140);

// 5. Prototype
// function Characters(name, type, cp, level) {
//   this.name = name;
//   this.type = type;
//   this.cp = cp;
//   this.level = level;
// }

// Characters.prototype.levelUp = function () {
//   this.level += 1;
//   this.cp += 1250;
//   return `Congratulations, ${this.name} has leveled up to level ${this.level}.`;
// };

// let characters = new Characters('Mephistopheles', 'Human', 65000, 181);

// 6. Class
class Characters {
  constructor(name, type, cp, level) {
    this.name = name;
    this.type = type;
    this.cp = cp;
    this.level = level;
  }

  levelUp() {
    this.level += 1;
    this.cp += 1250;
    return `Congratulations, ${this.name} has leveled up to level ${this.level}.`;
  }
}

let characters = new Characters('Mephistopheles', 'Human', 65000, 181);
