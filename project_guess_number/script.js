"use strict";

console.log(document.querySelector(".message"));
document.querySelector(".message").textContent = "🎉 Correct Number";
console.log(document.querySelector(".message"));

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);
document.querySelector(".check").addEventListener("click", () => {
  //   document.querySelector(".number").textContent = document.querySelector(
  //     ".guess"
  //   ).value;

  //converting string into number for comparison with the random number
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
});
