// Arrow Function
// Implicit Return
// const showName = (name) => `Hello, ${name}`;
// console.log(showName('Luna'));

// Multiple Param
// const showName = (name, time) => {
//   return `Good ${time}, ${name}`;
// };

// console.log(showName('Luna', 'morning'));

// No Param
// const showName = () => `Hello World`;
// console.log(showName());

// let characters = ['Mephistopheles', 'Jade', 'Naiah'];

// let countCharacter = characters.map((name) => name.length);
// console.log(countCharacter);

// let countCharacter = characters.map((name) => ({ name, charCount: name.length }));
// console.table(countCharacter);

// this in arrow function, arrow function tidak memiliki konsep this

// Constructor Function
// const Character = function () {
//   this.name = 'Jade';
//   this.type = 'Human';
//   this.sayHello = () => {
//     console.log(`Test ${this.name}`);
//   };
// };

// const character = new Character();

// Object Literal
// const Character = {
//   name: 'Jade',
//   type: 'Human',
//   sayHello: () => {
//     console.log(`${this.name}`);
//   },
// };

// const Character = function () {
//   this.name = 'Jade';
//   this.type = 'Human';
//   this.level = 1;
//   this.sayHello = () => {
//     console.log(`Test ${this.name}`);
//   };

//   setInterval(() => {
//     console.log(this.level++);
//   }, 500);
// };

// const character = new Character();

// Real World Implementation
const box = document.querySelector('.box');
box.addEventListener('click', function () {
  let satu = 'size';
  let dua = 'caption';

  if (this.classList.contains(satu)) {
    [satu, dua] = [dua, satu];
  }

  this.classList.toggle(satu);
  setTimeout(() => {
    this.classList.toggle(dua);
  }, 600);
});
