// let repeat = true;
let guessed = false;

let number = parseInt(Math.random() * 10);

let chances = 3;

console.log(number);

while (!guessed && chances > 0) {
  let guessedNumber = parseInt(prompt('Guess the number (1-10)'));
  if (guessedNumber === number) {
    alert('Congratulations, you guessed the right number!');
    guessed = true;
  } else {
    chances -= 1;
    alert('You guessed the wrong number, try again!\n You have ' + chances + ' chances remaining.');
  }
}
