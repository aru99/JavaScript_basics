/*let country = 'India';
let continent = 'Asia';
let population = 5.8 ;

console.log("I am from "+ country+" which is in "+ continent +" with a population of "+ population);
*/

//bill calculator using ternary operator 

const bill_value1 = 234;
const bill_value2 = 345;

// concated ternary operators 
const tip_value1 = bill_value1 >= 50 && bill_value1<=300 ? (bill_value1 * 0.15) : bill_value1 >= 300 ? (bill_value1 * .20) : `tip is not valid`;

console.log(tip_value1);
