// Destructuring Variable / Assignment

// Destructuring Array

// const perkenalan = ['Halo', 'nama', 'saya', 'Luna'];

// skipping items
// const [salam, , , nama] = perkenalan;
// console.log(salam);
// console.log(nama);

// swap items
// let [a, b] = [10, 2];
// [a, b] = [b, a];
// console.log(a);

// return value pada function
// function coba() {
//   return [1, 2];
// }

// const [a, b] = coba();
// console.log(b);

// Rest parameter
// const [a, ...values] = [1, 2, 3, 4, 5];

// console.log(values);

// Destructuring Object

// const characters = {
//   name: 'Jade',
//   type: 'Human',
//   level: 140,
// };

// const { name, type, level } = characters;
// console.log(type);

// Assignment tanpa deklarasi object

// ({ name, type, level } = {
//   name: 'Jade',
//   type: 'Human',
//   level: 140,
// });
// console.log(type);

// Assign ke variable baru
// const characters = {
//   name: 'Jade',
//   type: 'Human',
//   level: 140,
// };

// const { name: nama, type, level } = characters;
// console.log(nama);

// Memberikan default value
// const characters = {
//   name: 'Jade',
//   type: 'Human',
//   level: 140,
// };

// const { name: nama, type, level, role = 'INT' } = characters;
// console.log(role);

// Rest parameter
// const characters = {
//   name: 'Jade',
//   type: 'Human',
//   level: 140,
// };

// const { name, ...values } = characters;
// console.log(values);

// Mengambil field pada object, setelah dikirim sebagai parameter untuk function
// const characters = {
//   id: 1,
//   name: 'Jade',
//   type: 'Human',
//   level: 140,
// };

// function getId({ id }) {
//   return id;
// }

// console.log(getId(characters));

// Destructuring Function
// function kalkulasi(a, b) {
//   return [a + b, a - b, a * b, a / b];
// }

// const [jumlah, kurang, kali, bagi] = kalkulasi(2, 3);
// console.log(jumlah);
// console.log(kurang);
// console.log(kali);
// console.log(bagi);

// function kalkulasi(a, b) {
//   return {
//     tambah: a + b,
//     kurang: a - b,
//     kali: a * b,
//     bagi: a / b,
//   };
// }

// const { bagi, kali, kurang, tambah } = kalkulasi(2, 4);
// console.log(bagi);

// Destructuring function arguments
// Without destructuring
// const characters = {
//   name: 'Jade',
//   type: 'Human',
// };

// function printChar(characters) {
//   return `Hello my name is ${characters.name}, i'm a ${characters.type}`;
// }

// console.log(printChar(characters));

// With destructuring
const characters = {
  name: 'Jade',
  type: 'Human',
  attributes: {
    atk: 40000,
    def: 3000,
  },
};

function printChar({ name, type, attributes: { atk, def } }) {
  return `Hello my name is ${name}, i'm a ${type}, my attack power is ${atk}`;
}

console.log(printChar(characters));
