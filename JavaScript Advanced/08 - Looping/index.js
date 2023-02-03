// for..of
// array
// const characters = ['Jade', 'Naiah', 'Talia'];

// for (const char of characters) console.log(char);

// string
// const name = 'Mephistopheles';
// for (const n of name) console.log(n);

// get index on for..of

// const characters = ['Jade', 'Naiah', 'Talia'];

// for (const [i, m] of characters.entries()) {
//   console.log(`${i} - ${m}`);
// }

// NodeList
// const nameList = document.querySelectorAll('.name');

// nameList.forEach((n) => console.log(n.textContent));
// for (n of nameList) {
//   console.log(n.textContext);
// }

// Arguments
// function jumlahkanAngka() {
//   let jumlah = 0;
//   for (a of arguments) jumlah += a;
//   return jumlah;
// }

// console.log(jumlahkanAngka(1, 2, 3, 4, 5));

// for..in
const characters = {
  name: 'Jade',
  type: 'Human',
};

for (char in characters) {
  console.log(characters[char]);
}
