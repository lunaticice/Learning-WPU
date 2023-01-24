// Manupulasi array

// 1. Menambah isi array
let arr = [];
arr[0] = 'L U N A';
arr[1] = 1;
arr[2] = true;
// console.log(arr);

// 2. Menghapus isi array
// arr[1] = undefined;
// console.log(arr);

// 3. Menampilkan isi array
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// Array method
// 1. Join
// console.log(arr.join('-'));

// 2. Push
arr.push('Hana');

// 3. Pop
arr.pop();

// 4. Unshift
arr.unshift('Hana');

// 5. Shift
arr.shift();

// 6. Splice
// splice(indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2, ...)
arr.splice(1, 0, 'Hana', 'Cosplayer');

// 7. Slice
// slice(indexAwal, indexAkhir + 1)
let arr2 = arr.slice(1, 3);

// console.log(arr);
// console.log(arr2);

// 8.forEach
// arr.forEach(function (e, i) {
//   console.log(`Elemen ke-${i + 1} : ${e}`);
// });

// 9. map
let arr3 = [2, 5, 4, 1, 7, 6];
let arr4 = arr3.map(function (e) {
  return e * 2;
});

// console.log(arr4.join(','));

// 10. sort
arr3.sort();
// console.log(arr3);

// 11. Filter
let arr5 = arr3.filter(function (x) {
  return x > 4;
});
// console.log(arr5);

// 12. Find
let arr6 = arr3.find(function (x) {
  return x > 4;
});
console.log(arr6);
