// Template Literals / Template String
// const name = 'Luna';
// const age = 25;
// console.log(`Hello my name is ${name}, i'm ${age} years old.`);

// Embedded Expression
// console.log(`${1 + 1}`);
// console.log(`${alert('halo')}`);

// const x = 10;
// console.log(`${x % 2 == 0 ? 'genap' : 'ganjil'}`);

// HTML Fragments
// const characters = {
//   name: 'Jade',
//   type: 'Human',
//   level: 140,
// };

// const el = `<div class="character">
//   <h2>${characters.name}</h2>
//   <span class="type">${characters.type}</span>
//   <span class="level">${characters.level}</span>
// </div>`;

// console.log(el);

// Looping HTML Fragments
// const characters = [
//   {
//     name: 'Jade',
//     type: 'Human',
//     level: 140,
//   },
//   {
//     name: 'Mephistopheles',
//     type: 'Human',
//     level: 200,
//   },
//   {
//     name: 'Talia',
//     type: 'Fairy',
//     level: 140,
//   },
//   {
//     name: 'Chloe',
//     type: 'Fairy',
//     level: 140,
//   },
//   {
//     name: 'Naiah',
//     type: 'Fairy',
//     level: 140,
//   },
// ];

// const el = `<div class="character">
//   ${characters
//     .map(
//       (char) => `<ul>
//     <li>${char.name}</li>
//     <li>${char.type}</li>
//     <li>${char.level}</li>
//   </ul>`
//     )
//     .join('')}
// </div>`;

// Conditionals HTML Fragments
// Ternary
// const song = {
//   title: 'Uchiage Hanabi',
//   singer: 'DAOKO',
//   feat: 'Kenshi Yonezu',
// };

// const el = `<div class="song">
//   <ul>
//     <li>${song.title}</li>
//     <li>${song.singer} ${song.feat ? `(feat. ${song.feat})` : ''}</li>
//   </ul>
// </div>`;

// Nested
// const characters = {
//   name: 'Jade',
//   type: 'Human',
//   level: 140,
//   role: ['INT', 'Single', 'Buff'],
// };

// function printRole(role) {
//   return `
//     <ol>
//       ${role.map((r) => `<li>${r}</li>`).join('')}
//     </ol>
//   `;
// }

// const el = `<div class="characters">
//   <h2>${characters.name}</h2>
//   <span class="type">${characters.type}</span>
//   <span class="level">${characters.level}</span>
//   <h4>Role : </h4>
//   ${printRole(characters.role)}
// </div>`;

// document.body.innerHTML = el;

// Tagged Templates
// const name = 'Luna';
// const age = 25;

// function coba(strings, ...args) {
//   // let result = '';
//   // strings.forEach((str, i) => {
//   //   result += `${str}${args[i] || ''}`;
//   // });
//   // return result;

//   return strings.reduce((result, str, i) => `${result}${str}${args[i] || ''}`, '');
// }

// const str = coba`Hello, my name is ${name}, i'm ${age} years old.`;
// console.log(str);

// Highlight
const name = 'Luna';
const age = 25;

function highlight(strings, ...args) {
  return strings.reduce((result, str, i) => `${result}${str}<span class="hl">${args[i] || ''}</span>`, '');
}

const str = highlight`Hello, my name is ${name}, i'm ${age} years old.`;

document.body.innerHTML = str;
