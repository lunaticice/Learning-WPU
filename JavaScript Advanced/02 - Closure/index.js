// 1. Execution Context, Hoisting & Scope

// var name = 'Luna';
// console.log(name);

// creation phase pada Global Context
// variable = undefined
// function = fn()
// hoisting
// window = global object
// this = window

// execution phase

// console.log(sayHello);

// var name = 'Luna';
// var umur = 25;

// function sayHello() {
//   console.log(`Hello, my name ${name}, ${umur} years old`);
// }

// use javascript visualizer to understand the concept
// function membuat Local Execution Context, yang didalamnya terdapat creation dan execution phase
// window
// arguments

// var name = 'Luna';
// var username = '@lunaticproject';

// function cetakURL(username) {
//   var instagramURL = 'http://instagram.com';
//   return instagramURL + username;
// }

// console.log(cetakURL(username));

// function a() {
//   console.log('A');

//   function b() {
//     console.log('B');

//     function c() {
//       console.log('C');
//     }

//     c();
//   }

//   b();
// }

// a();

// 2. Closure

// function init() {
//   // let name = 'Luna';

//   return function (name) {
//     console.log(name);
//   };
// }

// let showName = init();
// showName('Luna');

// Factory function

// function message(time) {
//   return function (name) {
//     console.log(`Hello ${name}, good ${time}`);
//   };
// }

// let morning = message('morning');
// let afternoon = message('afternoon');
// let night = message('night');

// morning('Luna');
// night('Naiah');

// Private Method

let add = (function () {
  let counter = 0;
  return function () {
    return ++counter;
  };
})(); //IIFE

console.log(add());
console.log(add());
console.log(add());
