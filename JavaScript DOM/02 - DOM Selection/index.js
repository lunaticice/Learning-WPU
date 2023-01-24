// DOM Selection
// getElementById
// const judul = document.getElementById('judul');
// judul.style.color = 'red';
// judul.style.backgroundColor = 'blue';
// judul.innerHTML = 'LunaticProject';
// console.log(judul);

// getElementsByTagName
// const paragraph = document.getElementsByTagName('p');

// for (let i = 0; i < paragraph.length; i++) {
//   paragraph[i].style.backgroundColor = 'lightblue';
// }
// console.log(paragraph);

// Query Selector
// const p4 = document.querySelector('#b p');
// p4.style.color = 'green';
// p4.style.fontSize = '30px';

// const li2 = document.querySelector('section#b ul li:nth-child(2)');
// li2.style.backgroundColor = 'orange';

// Query Selector All
// const p = document.querySelectorAll('p');
// for (let i = 0; i < p.length; i++) {
//   p[i].style.backgroundColor = 'lightblue';
// }

const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');
p4.style.backgroundColor = 'orange';
