"use strict";

const a = 10;
console.log();

const calcMaxTem = (temps) => {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i <= temps.length; i++) {
    const current_temp = temps[i];

    //checking for values other than numbers
    if (typeof current_temp !== "number") continue;

    //checking for maximum and minimum temp
    if (max < current_temp) {
      max = temps[i];
    }
    if (min > current_temp) {
      min = current_temp;
    }
  }
  console.log(max, min);
};

calcMaxTem([10, 11, 29, 18, 20, 27, 2]);
