"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

const arry = [1, 2, 3, 4, 5];
//destructuring an array
const [q, w, e, r, t] = arry;
console.log(q, w, e, r, t);
const [item1, item2] = restaurant.categories;
console.log(item1, item2);
let [a, , b] = restaurant.categories;
console.log(`I would like to have a ${a} in ${b} style`);
console.log(a, b);
[a, b] = [b, a];
console.log(a, b);

console.log(restaurant.order(2, 0));
const [starters, mainCourse] = restaurant.order(2, 0);
console.log(`Starters: ${starters}
Maincourse: ${mainCourse}`);
