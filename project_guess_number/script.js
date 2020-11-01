"use strict";

// console.log(document.querySelector(".message"));
// document.querySelector(".message").textContent = "🎉 Correct Number";
// console.log(document.querySelector(".message"));

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;

// document.querySelector(".guess").value = 23;
// console.log(document.querySelector(".guess").value);

// -------------variables------------------------------
// creating the random number, won't change later on so const
const secretNumber = Math.trunc(Math.random() * 20 + 1);
//variable for score, it will change later on, so no const
let score = 20;
// ------------------variables------------------------------

document.querySelector(".number").textContent = secretNumber;

document.querySelector(".check").addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  //   checking for no value
  if (!guess) {
    document.querySelector(".message").textContent = `⛔ no value `;
  }
  //for different senarios
  else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Correct Number";
    //document.querySelector(".number").textContent = secretNumber;
  } else if (guess > secretNumber) {
    //if the number is greater than the random number
    document.querySelector(".message").textContent = "📈 too high";
    score--;
    document.querySelector(".score").textContent = score;
  } else if (guess < secretNumber) {
    //if the number is smaler than the random number
    document.querySelector(".message").textContent = "📈 too low";
    score--;
    document.querySelector(".score").textContent = score;
  }
});
