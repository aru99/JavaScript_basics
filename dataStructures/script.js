"use strict";

const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const openingHours = {
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
  sun: {
    open: 11,
    close: 11,
  },
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  //adding opening_hours in the current object
  // prior to es6 we would do the below operation as openingHours : openingHours;
  openingHours,

  // order: function (starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  // },
  // the above and below syntax show the difference between declaring a function as a property post and after ES6
  order(starterIndex, mainIndex) {
    let orderToServe = [];
    if (
      starterIndex <= this.starterMenu.length &&
      mainIndex <= this.mainMenu.length
    ) {
      orderToServe = [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    } else {
      orderToServe = [`invalid order`];
    }
    return orderToServe;
  },
  // orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
  //   console.log(`Order recieved  ${this.starterMenu[starterIndex]}
  //   and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  // },
  orderDelivery({ starterIndex, mainIndex, time, address }) {
    console.log(`Order recieved  ${this.starterMenu[starterIndex]}
    and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  orderPasta: function (ing1, ing2, ing3) {
    return `here is your delicious pasta : ${ing1}, ${ing2}, ${ing3}`;
  },
};

//sets
const staff = [
  "chef",
  "waiter",
  "manager",
  "chef",
  "waiter",
  "watchman",
  "cook",
];

const staffUnnique = new Set(staff);
// console.log(staffUnnique);
const uniqueStaffarry = [...new Set(staff)];
console.log(uniqueStaffarry.length);
console.log(uniqueStaffarry);

console.log(`this is comig form the set properties : ` + new Set(staff).size);

// maps
const rest = new Map();
rest.set("name", "haldirams");
rest.set("address", "mfm mall mg road");
rest.set(3, "owner");
console.log(rest);

rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 22)
  .set(true, "aavijoo bakka , we are open :D")
  .set(false, "Jaavone, api close abhi");

console.log(rest.get("name"));
console.log(rest.get(3));
console.log(rest.get(true));
console.log(rest.get("categories"));

const time = 21;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

//arrays in map
const tableNumbers = [1, 2, 3, 4];
rest.set(tableNumbers, "number of tables");
console.log(rest.get(tableNumbers));

// populating the map via another method
const question_map = new Map([
  ["question", "which is the most famous programming language in the world"],
  [1, "c"],
  [2, "c++"],
  [3, "javascript"],
  [true, "correct answer 💥"],
  [false, "wronng answer 😒"],
]);

// iterating over a map
console.log(question_map.get("question"));
for (const [key, value] of question_map) {
  if (typeof key === "number") {
    console.log(` Answers ${key} : ${value}`);
  }
}

const answer = Number(prompt("Your answer : "));
console.log(answer);
const answer_message = question_map.get(answer === 3);
console.log(answer_message);
// console.log(question_map);
// //converting or obtaining a map from an object
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);
//
// //loopinng over objects : object keys, values and entries
// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `we are open on ${properties.length} days`;
// console.log(openStr);

// for (const day of properties) {
//   openStr += `${day},`;
// }
// console.log(openStr);

// //entire object
// const entries = Object.entries(openingHours);
// console.log(entries);

// for (const [key, { open, close }] of entries) {
//   console.log(`we are open on ${key} from ${open}:00 hrs to ${close}:00 hrs`);
// }

//
// //example for Optional Chaining
// const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
// for (const day of days) {
//   // console.log(day);
//   const open = restaurant.openingHours[day]?.open ?? `closed`;
//   console.log(`on ${day} we open at ${open}`);
// }

// //optional chaining on methods
// console.log(restaurant.order?.(0, 1) ?? `method does not exists`);
// console.log(restaurant.orderResotto?.(0, 1) ?? `method does not exixts`);
// console.log(restaurant.order?.(1, 5) ?? `out of menu`);

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// for (const menu_item of menu) console.log(menu_item);

// for (const item of menu.entries()) {
//   console.log(item);
// }

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el} `);
// }

// restaurant.numGuests = 23;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// // const ingredients = [prompt(`ing1 : `), prompt(`ing2 : `), prompt(`ing3 : `)];
// // console.log(ingredients);
// // const msgRestaurant = restaurant.orderPasta(...ingredients);
// // console.log(msgRestaurant);

// //copying an object and adding new properties as well using spread fnction
// const restaurantNew = { FoundingYear: 1998, ...restaurant, founder: "gussipe" };
// console.log(restaurantNew);
// //creating an object usig the spread function
// const resaturantCopy = { ...restaurant };
// console.log(resaturantCopy);

// //rest pattern
// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);
// //pbjects and rest patterns
// const {
//   sat: { open, close },
//   ...weekdays
// } = restaurant.openingHours;
// console.log(`opening hours: `, open, `closing hours on sat:`, close, weekdays);

// //using rest pattern to pass arguments in a function
// const add = (...numbers) => {
//   console.log(numbers);
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     //console.log(numbers[i]);
//     sum += numbers[i];
//     //console.log(sum);
//   }
//   return sum;
// };

// const s = add(2, 3);
// const s2 = add(1, 2, 3);
// console.log(s, s2);
// // restaurant.orderDelivery({
// //   time: `22:30`,
// //   address: `54 a ghoda `,
// //   mainIndex: 2,
// //   starterIndex: 2,
// // });

// // // destructuring objects
// // const { name, openingHours, categories } = restaurant;
// // console.log(name, openingHours, categories);
// // //destructuring objects with different varirable names
// // const {
// //   name: restaurantName,
// //   openingHours: timing,
// //   categories: types,
// // } = restaurant;
// // console.log(restaurantName, timing, types);

// // //default menu
// // const { menu = [], starterMenu: starters = [] } = restaurant;
// // console.log(menu, starters);
// // //mutating values
// // let a = 23;
// // let b = 56;
// // console.log(a, b);
// // const obj = { a: 33, b: 34, c: 89 };
// // ({ a, b } = obj);
// // console.log(a, b);
// // //nested objects
// // const {
// //   fri: { open, close },
// // } = timing;
// // console.log(open, close);

// // // const arry = [1, 2, 3, 4, 5];
// // // //destructuring an array
// // // const [q, w, e, r, t] = arry;
// // // console.log(q, w, e, r, t);
// // // const [item1, item2] = restaurant.categories;
// // // console.log(item1, item2);
// // // let [a, , b] = restaurant.categories;
// // // console.log(`I would like to have a ${a} in ${b} style`);
// // // console.log(a, b);
// // // [a, b] = [b, a];
// // // console.log(a, b);

// // // console.log(restaurant.order(2, 0));
// // // const [starters, mainCourse] = restaurant.order(2, 0);
// // // console.log(`Starters: ${starters}
// // // Maincourse: ${mainCourse}`);
// // // const arry2 = [1, 2, 3, [4, 5, 6, 7]];
// // // const [s, , d, f] = arry2;
// // // console.log(s, d, f);

// const numSum = (num) => {
//   return num / 2;
// };

// let age = [];
// for (let i = 0; i < 20; i++) {
//   age.push(i);
// }
// console.log(age);
// console.log([...age, 20, 21]);
