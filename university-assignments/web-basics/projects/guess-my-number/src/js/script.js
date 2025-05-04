let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

const numberElement = document.querySelector('.number');
const guessInput = document.querySelector('.guess');
const messageElement = document.querySelector('.message');
const scoreElement = document.querySelector('.score span');
const checkButton = document.querySelector('.check');

function checkGuess() {
  const guess = Number(guessInput.value);

  if (!guess) {
    messageElement.textContent = 'Please enter a number!';
    return;
  }

  if (guess === secretNumber) {
    messageElement.textContent = 'Correct Number!';
    numberElement.textContent = secretNumber;
    document.body.style.backgroundColor = '#60b347';
  } else {
    if (score > 1) {
      messageElement.textContent = guess > secretNumber ? 'Too high!' : 'Too low!';
      score--;
      scoreElement.textContent = score;
    } else {
      messageElement.textContent = 'You lost the game!';
      scoreElement.textContent = 0;
    }
  }
}

checkButton.addEventListener('click', checkGuess);