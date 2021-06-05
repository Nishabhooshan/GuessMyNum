'use strict';

const selectNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = (document.querySelector('.guess').value)
  //No Number
  if (!guess) {
    // document.querySelector('.message').textContent = 'No Number';
     displayMessage('⛔️ No number!')

    //wins
  } else if (guess === selectNumber) {
    // document.querySelector('.message').textContent = 'Correct Number';
     displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = selectNumber;
    document.querySelector('body').style.backgroundColor = 'Green'
 
 if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      // guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '💥 You lost the game!';
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }



    // Greater num
  // } else if (guess > selectNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Greater Number';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You Lost'
  //     document.querySelector('.score').textContent = 0
  //     document.querySelector('body').style.backgroundColor = 'Red'
  //   }

  // } else if (guess < selectNumber) {
  //   if (score > 0) {
  //     document.querySelector('.message').textContent = 'Too Low';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You Lost'
  //     document.querySelector('.score').textContent = 0
  //     document.querySelector('body').style.backgroundColor = 'Red'
  //   }

  // }
});

document.querySelector('.again').addEventListener('click', function () {
  let score = 20;
  const selectNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = 'score';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = 'pink';
  document.querySelector('.number').style.width = '15rem';
})
