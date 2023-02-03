// Spread Operator
// memecah iterables menjadi single element

// const characters = ['Jade', 'Talia', 'Naiah'];
// console.log(...characters[0]);

// Menggabungkan 2 array
// const characters = ['Jade', 'Talia', 'Naiah'];
// const type = ['Human', 'Fairy'];
// const build = [...characters, ...type, 'Beast'];
// console.log(build);

// Copy nilai pada array
// const characters = ['Jade', 'Talia', 'Naiah'];
// const characters2 = [...characters];
// characters2[0] = 'Vivienne';
// console.log(characters2);

// const listCharacters = document.querySelectorAll('li');
// const characters = [...listCharacters].map((char) => char.textContent);
// console.log(characters);

// const name = document.querySelector('.names');
// const letters = [...name.textContent].map((l) => `<span>${l}</span>`).join('');
// name.innerHTML = letters;

// Rest Parameter

// function myFunc() {
// return myArgs;
// return Array.from(arguments);
// return [...arguments];
// }

// console.log(myFunc(1, 2, 3, 4, 5));

// function add(...numbers) {
// let total = 0;
// for (const n of numbers) total += n;
// return total;

// return numbers.reduce((a, b) => a + b);
// }

// console.log(add(1, 2, 3, 4, 5));

// Array destructuring
// const group1 = ['Jade', 'Naiah', 'Talia', 'Violette'];
// const [leader, sublead, ...members] = group1;
// console.log(members);

// Object destructuring
// const team = {
//   pm: 'Arya',
//   ba: 'Vicky',
//   tl: 'Hengki',
//   frontEnd1: 'Aldo',
//   frontEnd2: 'Ian',
//   ux: 'Wati',
//   qa: 'Farisa',
// };

// const { pm, ba, tl, qa, ...dev } = team;
// console.log(dev);

// Filtering
function filterBy(type, ...values) {
  return values.filter((v) => typeof v === type);
}

console.log(filterBy('boolean', 1, 2, 'Luna', true, false));
