'use strict';

// ---------------selecting the reuseable elements----------------------------------
//for active player
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

//for score of the players
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
//for current score
const currentEl0 = document.getElementById('current--0');
const currentEl1 = document.getElementById('current--1');
//for dice
const diceEl = document.querySelector('.dice');
//button behaviour
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
// ---------------selecting the reuseable elements----------------------------------

//------------------setting the initial score
score0El.textContent = 0;
score1El.textContent = 0;
//Hiding the dice initially, remove the hidden calss later to show the dice
diceEl.classList.add('hidden');
// definfing the current score outside of the event handler
let currentScore = 0;
let activePlayer = 0;
const scores = [0, 0];

//-------------rolling dice functionality------------

//^^^^^^^^^^^^^^^^^^^^^^^eventListener for the dice roll button start^^^^^^^^^^^^^^^^^^^^^
btnRoll.addEventListener('click', () => {
  //TODO
  //1.generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);

  //2.displaying the dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  //check for a rolled 1: if true, switch to next player
  if (dice !== 1) {
    //add dice to the current score
    // currentScore = currentScore + dice; a better way is written down XD
    currentScore += dice;
    document.getElementById(
      `current--${activePlayer}`
    ).textContent = currentScore;
  } else {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});
//^^^^^^^^^^^^^^^^^^^^^^^eventListener for the dice roll button end^^^^^^^^^^^^^^^^^^^^^
