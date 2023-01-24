// const p3 = document.querySelector('.p3');
// p3.onclick = changeBackgroundColor;

// function changeBackgroundColor() {
//   p3.style.backgroundColor = 'lightblue';
// }

// const p4 = document.querySelector('section#b p');
// p4.addEventListener('click', function () {
//   const ul = document.querySelector('section#b ul');
//   const liBaru = document.createElement('li');
//   const textLiBaru = document.createTextNode('item baru');
//   liBaru.appendChild(textLiBaru);
//   ul.appendChild(liBaru);
// });

const p3 = document.querySelector('.p3');
p3.addEventListener('click', function () {
  p3.style.backgroundColor = 'lightblue';
});
p3.addEventListener('mouseenter', function () {
  p3.style.backgroundColor = 'green';
});
p3.addEventListener('mouseleave', function () {
  p3.style.backgroundColor = 'yellow';
});
p3.addEventListener('click', function () {
  p3.style.color = 'green';
});
