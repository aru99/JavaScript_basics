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
  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(`Order recieved  ${this.starterMenu[starterIndex]}
    and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  orderPasta: function (ing1, ing2, ing3) {
    return `here is your delicious pasta : ${ing1}, ${ing2}, ${ing3}`;
  },
};
restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// const ingredients = [prompt(`ing1 : `), prompt(`ing2 : `), prompt(`ing3 : `)];
// console.log(ingredients);
// const msgRestaurant = restaurant.orderPasta(...ingredients);
// console.log(msgRestaurant);

//copying an object and adding new properties as well using spread fnction
const restaurantNew = { FoundingYear: 1998, ...restaurant, founder: "gussipe" };
console.log(restaurantNew);
//creating an object usig the spread function
const resaturantCopy = { ...restaurant };
console.log(resaturantCopy);

//rest pattern
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);
//pbjects and rest patterns
const {
  sat: { open, close },
  ...weekdays
} = restaurant.openingHours;
console.log(`opening hours: `, open, `closing hours on sat:`, close, weekdays);

//using rest pattern to pass arguments in a function
const add = (...numbers) => {
  console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    //console.log(numbers[i]);
    sum += numbers[i];
    //console.log(sum);
  }
  return sum;
};

const s = add(2, 3);
const s2 = add(1, 2, 3);
console.log(s, s2);
// restaurant.orderDelivery({
//   time: `22:30`,
//   address: `54 a ghoda `,
//   mainIndex: 2,
//   starterIndex: 2,
// });

// // destructuring objects
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);
// //destructuring objects with different varirable names
// const {
//   name: restaurantName,
//   openingHours: timing,
//   categories: types,
// } = restaurant;
// console.log(restaurantName, timing, types);

// //default menu
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);
// //mutating values
// let a = 23;
// let b = 56;
// console.log(a, b);
// const obj = { a: 33, b: 34, c: 89 };
// ({ a, b } = obj);
// console.log(a, b);
// //nested objects
// const {
//   fri: { open, close },
// } = timing;
// console.log(open, close);

// // const arry = [1, 2, 3, 4, 5];
// // //destructuring an array
// // const [q, w, e, r, t] = arry;
// // console.log(q, w, e, r, t);
// // const [item1, item2] = restaurant.categories;
// // console.log(item1, item2);
// // let [a, , b] = restaurant.categories;
// // console.log(`I would like to have a ${a} in ${b} style`);
// // console.log(a, b);
// // [a, b] = [b, a];
// // console.log(a, b);

// // console.log(restaurant.order(2, 0));
// // const [starters, mainCourse] = restaurant.order(2, 0);
// // console.log(`Starters: ${starters}
// // Maincourse: ${mainCourse}`);
// // const arry2 = [1, 2, 3, [4, 5, 6, 7]];
// // const [s, , d, f] = arry2;
// // console.log(s, d, f);

const numSum = (num) => {
  return num / 2;
};

let age = [];
for (let i = 0; i < 20; i++) {
  age.push(i);
}
console.log(age);
console.log([...age, 20, 21]);
