function getComputerChoices() {
  const computerChoices = Math.random();

  if (computerChoices < 0.34) return 'raiden';
  if (computerChoices < 0.67) return 'zhongli';
  return 'venti';
}

function getResult(computerChoices, playerChoices) {
  if (playerChoices == computerChoices) return 'DRAW!';
  if (playerChoices == 'raiden') return computerChoices == 'zhongli' ? 'LOSE!' : 'WIN!';
  if (playerChoices == 'zhongli') return computerChoices == 'venti' ? 'LOSE!' : 'WIN!';
  if (playerChoices == 'venti') return computerChoices == 'raiden' ? 'LOSE!' : 'WIN!';
}

function randomize() {
  const imgComputer = document.querySelector('.img-komputer');
  const img = ['raiden', 'zhongli', 'venti'];
  let i = 0;
  const startTime = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - startTime > 1000) {
      clearInterval;
      return;
    }
    imgComputer.setAttribute('src', 'img/' + img[i++] + '.jpg');
    if (i == img.length) i = 0;
  }, 100);
}

const playerChoices = document.querySelectorAll('li img');
playerChoices.forEach(function (e) {
  e.addEventListener('click', function () {
    const computerChoices = getComputerChoices();
    const playerChoices = e.className;
    const result = getResult(computerChoices, playerChoices);

    randomize();

    setTimeout(function () {
      const imgComputer = document.querySelector('.img-komputer');
      imgComputer.setAttribute('src', 'img/' + computerChoices + '.jpg');

      const info = document.querySelector('.info');
      info.innerHTML = result;
    }, 1000);
  });
});
