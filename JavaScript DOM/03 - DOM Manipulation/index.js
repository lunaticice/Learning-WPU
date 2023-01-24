// const judul = document.getElementById('judul');
// judul.innerHTML = 'LunaticProject';
// judul.style.backgroundColor = 'orange';
// judul.setAttribute('name', 'LunaticProject');
// judul.removeAttribute('name');

// const sectionA = document.querySelector('section#a');
// sectionA.innerHTML = 'Hello World';

// const p2 = document.querySelector('.p2');
// p2.classList.add('biru-muda');

// Manipulasi Node
// Buat Elemen Baru
const paragraph = document.createElement('p');
const textParagraph = document.createTextNode('Paragraf Baru');

// Simpan tulisan ke dalam paragraf
paragraph.appendChild(textParagraph);

// Simpan paragraph di akhir section A
const sectionA = document.getElementById('a');
sectionA.appendChild(paragraph);

const listItem = document.createElement('li');
const listItemText = document.createTextNode('item n');

listItem.appendChild(listItemText);

const getList = document.querySelector('section#b ul');
const getSecondListItem = getList.querySelector('li:nth-child(2)');

getList.insertBefore(listItem, getSecondListItem);

const link = document.getElementsByTagName('a')[0];

sectionA.removeChild(link);

const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

const h2Baru = document.createElement('h2');
const teksH2Baru = document.createTextNode('Judul Baru!');

h2Baru.appendChild(teksH2Baru);

sectionB.replaceChild(h2Baru, p4);
