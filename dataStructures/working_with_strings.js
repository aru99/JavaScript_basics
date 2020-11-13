"use strict";

const airline = "Tap airlines of luftanza";
const plane = "A320";
//--------------------------------------------------name right formatting start-------------------------------------
// function that takes a passanger name and returns the right formatted passanger name
const correctName = (passanger_name) => {
  const lowerPassanger = passanger_name.toLowerCase();
  const correctPassanger =
    lowerPassanger[0].toUpperCase() +
    lowerPassanger.slice(1, lowerPassanger.indexOf(" ")) +
    " " +
    lowerPassanger[lowerPassanger.indexOf(" ") + 1].toUpperCase() +
    lowerPassanger.slice(lowerPassanger.indexOf(" ") + 2);

  return correctPassanger;
};

//convering to lowercase and upper case, botht the methods does not require any arguments
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

console.log(correctName("MohaMMad arMan"));

// passanger name correction
const passanger = "armAn MohaMMad"; // Arman Mohammad
const lowerPassanger = passanger.toLowerCase(); // arman mohammad

// re-read this code again to understand how its working as this logic is pretty sick
const correctPassanger =
  lowerPassanger[0].toUpperCase() +
  lowerPassanger.slice(1, lowerPassanger.indexOf(" ")) +
  " " +
  lowerPassanger[lowerPassanger.indexOf(" ") + 1].toUpperCase() +
  lowerPassanger.slice(lowerPassanger.indexOf(" ") + 2);

console.log(correctPassanger);
//--------------------------------------------------name right formatting end-------------------------------------

//---------------------------------------emial comparison start------------------------------
const email = "thisisdummyemail@dummy.com";
const loginEmail = "   ThisISDUMMyEmail@DUmmy.com \n";

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// const finalEmail = trimmedEmail;
// console.log(finalEmail);
// console.log(finalEmail === email);

//refactoring the above lines of code
const normalise_email = loginEmail.toLowerCase().trim();
console.log(normalise_email);
//converting it in a function
const emailCorrector = (user_email) => {
  return user_email.toLowerCase().trim();
};

console.log(emailCorrector(loginEmail));
//---------------------------------------emial comparison end------------------------------
// console.log(plane[3]);

// console.log(plane.length);
// console.log(plane.indexOf(0));
// console.log(airline.indexOf("a"));
// console.log(airline.lastIndexOf("a"));
// console.log(airline.indexOf("of"));
// console.log(airline.slice(4));

// console.log(airline.slice(4, 7));
// console.log(airline.slice(0, airline.indexOf(" ")));
// // without adding 1 the space was also included in the output of the slice method
// console.log(airline.slice(airline.lastIndexOf(" ") + 1));

// console.log(airline.slice(-1));
// console.log(airline.slice(1, -1));

// // function to check for middle seat in an airplane
// const checkMiddleSeat = (seat_number) => {
//   //B and E are middle seats
//   if (seat_number.slice(-1) === "B" || seat_number.slice(-1) === "E") {
//     return `Your seat ${seat_number} is a middle seat 😭`;
//   } else {
//     return `your seat ${seat_number} is not a middle seat😲`;
//   }
// };

// console.log(checkMiddleSeat("11B"));
// console.log(checkMiddleSeat("23C"));
// console.log(checkMiddleSeat("3E"));
// console.log(checkMiddleSeat("23A"));
// for (const [index, element] of plane) {
//   console.log(element, index);
// }
