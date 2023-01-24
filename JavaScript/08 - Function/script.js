// function luasPersegi(s) {
//   let area = Math.pow(s, 2);
//   return area;
// }

// let s = prompt('Masukkan sisi : ');
// let area = luasPersegi(s);
// alert('Luas persegi adalah : ' + area);

// function tambah() {
//   return arguments;
// }

// let test = tambah(5, 10, 20, 'hi', false);
// console.log(test);

// function tambah() {
//   let result = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     result += arguments[i];
//   }
//   return result;
// }

// let test = tambah(1, 2, 3, 4, 5);
// console.log(test);

// function showNumber(n) {
//   if (n === 0) return;
//   console.log(n);
//   return showNumber(n - 1);
// }

// showNumber(10);

// function factorial(n) {
//   if (n === 0) return 1;
//   return n * factorial(n - 1);
// }

// console.log(factorial(150));

let showMessage = function (name) {
  alert('Hello' + name);
};

showMessage('L U N A');
