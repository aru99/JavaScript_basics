"use strict";

const airline = "Tap airlines of luftanza";
const plane = "A320";

console.log(plane[3]);

console.log(plane.length);
console.log(plane.indexOf(0));
console.log(airline.indexOf("a"));
console.log(airline.lastIndexOf("a"));
console.log(airline.indexOf("of"));
console.log(airline.slice(4));

console.log(airline.slice(4, 7));
console.log(airline.slice(0, airline.indexOf(" ")));
// without adding 1 the space was also included in the output of the slice method
console.log(airline.slice(airline.lastIndexOf(" ") + 1));

console.log(airline.slice(-1));
console.log(airline.slice(1, -1));

// function to check for middle seat in an airplane
const checkMiddleSeat = (seat_number) => {
  //B and E are middle seats
  if (seat_number.slice(-1) === "B" || seat_number.slice(-1) === "E") {
    return `Your seat ${seat_number} is a middle seat 😭`;
  } else {
    return `your seat ${seat_number} is not a middle seat😲`;
  }
};

console.log(checkMiddleSeat("11B"));
console.log(checkMiddleSeat("23C"));
console.log(checkMiddleSeat("3E"));
console.log(checkMiddleSeat("23A"));
// for (const [index, element] of plane) {
//   console.log(element, index);
// }
