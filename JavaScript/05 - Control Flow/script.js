// let repeat = true;
// while (repeat) {
//   console.log('Hello world');
//   repeat = confirm('Again?');
// }

// let count = 10,
//   index = 1;
// while (index <= count) {
//   console.log('Angkot No. ' + index + ' beroperasi dengan baik.');
//   index++;
// }

// let count = 10,
//   index = 1,
//   operated = 6;
// while (index <= operated) {
//   console.log('Angkot No. ' + index + ' beroperasi dengan baik.');
//   index++;
// }
// for (i = index; i <= count; i++) {
//   console.log('Angkot No. ' + i + ' sedang tidak beroperasi.');
// }

// let number = prompt('Insert number : ');

// if (number % 2 === 0) {
//   alert(number + ' is even');
// } else {
//   alert(number + ' is odd');
// }

// let index = 1,
//   count = 10;
// for (i = index; i <= count; i++) {
//   if (i <= 6) {
//     console.log('Angkot No. ' + i + ' beroperasi dengan baik.');
//   } else if (i === 8) {
//     console.log('Angkot No. ' + i + ' sedang lembur.');
//   } else {
//     console.log('Angkot No. ' + i + ' sedang tidak beroperasi.');
//   }
// }

// let rumus = prompt('Masukkan bangun datar yang ingin diketahui rumusnya');

// switch (rumus) {
//   case 'persegi':
//     alert('s^2');
//     break;
//   case 'segitiga':
//     alert('1/2*a*t');
//     break;
//   default:
//     alert('Bangun datar tidak ada');
//     break;
// }

let = item = '';
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    item += '*';
  }
  item += '\n';
}
console.log(item);
