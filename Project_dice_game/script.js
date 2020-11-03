'use strict';

// ---------------selecting the reuseable elements start----------------------------------
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
// ---------------selecting the reuseable elements end----------------------------------

let scores, currentScore, activePlayer, playing;

const init = () => {
  score0El.textContent = 0;
  score1El.textContent = 0;
  // definfing the current score outside of the event handler
  currentScore = 0;
  activePlayer = 0;
  scores = [0, 0];
  //game state variable
  playing = true;
  //resetting the current score
  currentEl0.textContent = 0;
  currentEl1.textContent = 0;

  //Hiding the dice initially, remove the hidden calss later to show the dice
  diceEl.classList.add('hidden');
  //removing the winner class styles from the players
  player0El.classList.remove(`player--winner`);
  player1El.classList.remove(`player--winner`);

  //removing the active class style from player1 and adding it back to player 0 which was the default
  player0El.classList.add(`player--active`);
  player1El.classList.remove(`player--active`);
};

init();

const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//-------------rolling dice functionality------------

//^^^^^^^^^^^^^^^^^^^^^^^eventListener for the dice roll button start^^^^^^^^^^^^^^^^^^^^^
btnRoll.addEventListener('click', () => {
  // play if the game varialbel (playing) is true
  if (playing) {
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
      switchPlayer();
    }
  }
});
//^^^^^^^^^^^^^^^^^^^^^^^eventListener for the dice roll button end^^^^^^^^^^^^^^^^^^^^^

//^^^^^^^^^^^^^^^^^^^^^^^eventListener for the hold button start^^^^^^^^^^^^^^^^^^^^^
btnHold.addEventListener('click', () => {
  // play if the game varialbel (playing) is true
  if (playing) {
    //TODO
    //1.Add current score to the active player

    scores[activePlayer] += currentScore;
    //scores[1] = scores[1] + currentScore
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //2.check if player's score is >= 100
    if (scores[activePlayer] >= 20) {
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
    } else {
      //2.1 if >= 100 finish the game
      //2.2 else switch to the next player
      switchPlayer();
    }
  }
});

//^^^^^^^^^^^^^^^^^^^^^^^eventListener for the hold button end^^^^^^^^^^^^^^^^^^^^^

//^^^^^^^^^^^^^^^^^^^^^^^eventListener for the new button start^^^^^^^^^^^^^^^^^^^^^
btnNew.addEventListener('click', init);

//^^^^^^^^^^^^^^^^^^^^^^^eventListener for the new button end^^^^^^^^^^^^^^^^^^^^^
