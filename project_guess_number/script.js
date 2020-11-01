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

  //--------for different senarios
  // when the user gusses the right number
  else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Correct Number";

    //changing the background color of the web page when the user wins
    //*note css values should be always passed in string
    document.querySelector("body").style.backgroundColor = "#60b347";
    //increasing the width of the number on display
    document.querySelector(".number").style.width = "30rem";
    //document.querySelector(".number").textContent = secretNumber;
  } else if (guess > secretNumber) {
    // comparison done only when the score is above 0
    if (score > 1) {
      //if the number is greater than the random number
      document.querySelector(".message").textContent = "📈 too high";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".score").textContent = "💥 you lost the game";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      //if the number is smaler than the random number
      document.querySelector(".message").textContent = "📈 too low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💥 you lost the game";
      document.querySelector(".score").textContent = 0;
    }
  }
});
