let repeat = true;

while (repeat) {
  // Get player choices
  let playerChoices = prompt('Choose rock / paper / scissors');

  // Get computer choices with random lib
  let computerChoices = Math.random() * 10;

  if (computerChoices < 0.34) {
    computerChoices = 'rock';
  } else if (computerChoices < 0.67) {
    computerChoices = 'paper';
  } else {
    computerChoices = 'scissors';
  }

  // Rules
  if (playerChoices === computerChoices) {
    result = 'Draw';
  } else if (playerChoices === 'rock') {
    result = computerChoices === 'scissors' ? 'Win' : 'Lose';
  } else if (playerChoices === 'paper') {
    result = computerChoices === 'rock' ? 'Win' : 'Lose';
  } else if (playerChoices === 'scissors') {
    result = computerChoices === 'paper' ? 'Win' : 'Lose';
  } else {
    result = 'Wrong choices input!';
  }

  // Result
  alert(result);

  repeat = confirm('Wanna play again ?');
}

alert('Thankyou for playing, see you again!');
