const button = document.getElementById('buttonChangeColor');
button.addEventListener('click', function () {
  // document.body.style.backgroundColor = 'lightblue';
  document.body.classList.toggle('lightblue');
});

const randomColorButton = document.createElement('button');
const randomColorButtonText = document.createTextNode('Randomize Color!');
randomColorButton.appendChild(randomColorButtonText);
randomColorButton.setAttribute('type', 'button');

button.after(randomColorButton);

randomColorButton.addEventListener('click', function () {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);
  document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});

const sliderRed = document.querySelector('input[name=sliderRed]');
const sliderGreen = document.querySelector('input[name=sliderGreen]');
const sliderBlue = document.querySelector('input[name=sliderBlue]');

sliderRed.addEventListener('input', function () {
  const r = sliderRed.value;
  const g = sliderGreen.value;
  const b = sliderBlue.value;
  document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});

sliderGreen.addEventListener('input', function () {
  const r = sliderRed.value;
  const g = sliderGreen.value;
  const b = sliderBlue.value;
  document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});

sliderBlue.addEventListener('input', function () {
  const r = sliderRed.value;
  const g = sliderGreen.value;
  const b = sliderBlue.value;
  document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});

document.body.addEventListener('mousemove', function (e) {
  // posisi mouse
  // const x = e.clientX;

  // ukuran browser
  // const width = window.innerWidth;

  const xPos = Math.round((e.clientX / window.innerWidth) * 255);
  const yPos = Math.round((e.clientY / window.innerHeight) * 255);
  const avg = Math.round((xPos + yPos) / 2);
  document.body.style.backgroundColor = 'rgb(' + xPos + ',' + yPos + ',' + avg + ')';
});
