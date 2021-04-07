'use strict';
// Selecting elements
const player0El = document.querySelector('.player--1');
const player1El = document.querySelector('.player--2');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
const score = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// Dice Roll functionality
btnRoll.addEventListener('click', function () {
  // generate rand number, I hate how rand works in JS, idiotic
  const dice = Math.trunc(Math.random() * 6) + 1;
  // display according image
  diceEl.classList.remove('hidden');
  diceEl.src = `resources/img/game_resource_img/dice-${dice}.png`;
  // chech if 1, if true switch player
  if (dice !== 1) {
    //  add score
    currentScore += dice;
    document.getElementById(
      `current--${activePlayer}`
    ).textContent = currentScore;
  } else {
    //   switch player
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});
