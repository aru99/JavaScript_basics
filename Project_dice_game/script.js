'use strict';

// ---------------selecting the reuseable elements----------------------------------
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
// ---------------selecting the reuseable elements----------------------------------

//------------------setting the initial score
score0El.textContent = 0;
score1El.textContent = 0;
//Hiding the dice initially, remove the hidden calss later to show the dice
diceEl.classList.add('hidden');

//-------------rolling dice functionality------------
btnRoll.addEventListener('click', () => {
  //TODO
  //1.generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);

  //2.displaying the dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  //check for a rolled 1: if true, switch to next player
});
