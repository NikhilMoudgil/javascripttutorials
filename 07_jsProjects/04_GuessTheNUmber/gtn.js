let rn = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const input = document.querySelector('#guessField');

const pguess = document.querySelector('.guesses');
const lastresult = document.querySelector('.lastResult');
const lowOhigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');
const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true; //it helps start game
if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(input.value);
    validateGuess(guess);
  });
}
function validateGuess(guess) {
  //validates value
  if (isNaN(guess)) {
    alert('Please Enter a valid Number');
  } else if (guess < 1) {
    alert('Please Enter a Number more Than one');
  } else if (guess > 100) {
    alert('Please Enter a valid Number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displaymsg(`Game Over !!! Random Number was ${r}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}
function checkGuess(guess) {
  // it to check value high or and print
  if (guess === rn) {
    displaymsg(`Huraaay You got this , The number is Right`);
    endGame();
  } else if (guess < rn) {
    displaymsg(`owww You lost this , The number is low`);
  } else if (guess > rn) {
    displaymsg(`owww You lost this , The number is high`);
  }
}
function displayGuess(guess) {
  // it  display and empties the user value , decreases the number of guesses
  input.value = '';
  pguess.innerHTML += `${guess}|`;
  numGuess++;
  lastresult.innerHTML = `${11 - numGuess}`;
}
function displaymsg(message) {
  //it passes a message
  lowOhigh.innerHTML = `<h2>${message}</h2>`;
}
function endGame() {
  // To end the Game
  input.value = '';
  input.setAttribute('disables', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game </h2> `;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    rn = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    pguess.innerHTML = '';
    lastresult.innerHTML = `${11 - numGuess}`;
    input.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}
