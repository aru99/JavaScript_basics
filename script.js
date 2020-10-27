/* ***************************
variable and data type
*/
/*
console.log("hello world 2 ");
var first_name = 'Mohammad';
var last_name = 'Arman';
console.log(first_name);
console.log(last_name);
console.log(first_name+" "+ last_name);

var full_age = true;
console.log(full_age);

var job;
console.log(job);

job = 'teacher'; 
console.log(job);
*/

/* ***************************
variable and type coercion
*/

/*var first_name = 'john';
var age = 28;

//type coercion is taking place here, converting float to sttring
console.log(first_name + " " + age);

var job, is_married;
job = 'teacher';
is_married = false;
console.log(first_name + " is a " + age + ' year old ' + job + ' is he married ? ' + is_married);

//variable mutation 
age = 'twenty eight';
job = 'driver';
console.log(first_name + " is a " + age + ' year old ' + job + ' is he married ? ' + is_married);
var last_name = prompt('what is johns last name ? ');
console.log(first_name + " " + last_name);

//multiple assignments 
var x,y;
x = y = (3+3) * 6-4;
console.log(x,y);
*/

/* ***************************
using ternary operators
*/

/*var first_name = 'john';
var age = prompt('enter johns age :)');

age >= 18 ? console.log(first_name+' drinks beer') : console.log(first_name+" drinks juice");

var drinks = age>=18 ? "beer" : "juice" ;
console.log(first_name+' drinks '+ drinks);
*/

/* functions *****************

*/

function calculate_age(birth_year)
{
    return 2020 - birth_year;
}

/*
var age_john = calculate_age(1998);
var age_mike = calculate_age(1997);
var age_mary = calculate_age(1995);
*/

/*
function years_untill_retirement(year, first_name)
{ 
    var age = calculate_age(year);
    var years_left_for_retirement = 65 - age;
    if(years_left_for_retirement > 0)
    {
        var message_retirement = 'years left for '+ first_name + " are " + years_left_for_retirement +
    " as current age is "+ age;
   
    }
    else if(years_left_for_retirement === 0)
    {
        var message_retirement = first_name + " has already retired"

    }
return message_retirement;    
}

var Arman = years_untill_retirement(1998, 'Arman');
var Rabbani = years_untill_retirement(1997, 'Rabbani');
var Ashima = years_untill_retirement(1994, 'Ashima');
console.log(Arman, Rabbani, Ashima);
*/

/* arrays ************
*/
/*
var john = ['John', 'Smith', 1998, 25]

for(var i =0; i<= john.length; i++){
    console.log(john[i], typeof(john[i]))
}

var john_age = john.indexOf("Smith") === -1 ? false : true;
console.log(john_age)
*/

/* objects ***************
*/

/*var john = {
    first_name : 'John',
    last_name : 'Smith',
    birth_year : 1998,
    family_members : ['Jane','Jcob', 'Williams'],
    job : 'teacher',
    is_married : false
}

console.log(john);
console.log(john.last_name);
console.log(john.birth_year);
console.log(john.family_members, john['family_members']);
*/

/**
 Methods
 */
/*
let john = {
    first_name : 'John',
    last_name : 'Smith',
    birth_year : 1998,
    family_members : ['Jane','Jcob', 'Williams'],
    job : 'teacher',
    is_married : false,
    //this is a function expression not a function declaration
    /*calculate_age:function(birth_year){
        return 2020 - birth_year;
    }*/
/*
    calculate_age:function(){
        //here this is referring to the object in which the function is defined i.e object john
        this.age = 2020 - this.birth_year;
     }


};
//you need to call the method for the key value pair to be assigned

john.calculate_age();
console.log(john);

const salary = 30000;
const tax_percentage = 10; 

const inhand_slalry = (salary) =>{
    let inhandSalary = 30000 - (salary * 0.1);
    return inhandSalary; 
}

console.log("the in hand salary is "+ inhand_slalry(salary));

//template literals
const FirstName = 'Mohammad';
const last_name = 'Arman';
const age = 22;
const work_experience = 01;

const person = `Hi I am ${FirstName + " "+ last_name}, I am ${age + "years old and have a work experience of  "+ work_experience + 'yrs' }`;
console.log(person);

console.log(`this 
is 
a multi line 
code`) */


// type conversion 
let birth_year = '1998';
let current_year = '2020';

const current_age = Number(current_year) - Number(birth_year);

console.log(current_age, typeof(current_age));

// here 0 is just a number but in the consitional statement it is conerted into in boolean value 
// now in terms of boolean value 0 is a falsy value thus the result 
let money = 0;
if (money) {
    console.log(`Don't spend it all ;)`)
} else {
    console.log(`You should get a job mate :)`)
}

// now money is not a falsy value
let money2 = 100;
if (money2) {
    console.log(`Don't spend it all ;)`)
} else {
    console.log(`You should get a job mate :)`)
}


// switch statements 

let day = `Thurusday`;

switch (day) {
    case `monday` || `Monday`:
        console.log(`It's monday today, go to the coding meeting`);
        break;
    case `Tuesday` || `tuesday`:
        console.log(`It's tuesady
        go the gymnasium`);
        break;
    case `wednesday`:
    case `Thurusday`:
        console.log(`Chill and relax`);
        break;

    default:
        console.log(`the entered day does not exists in the week
        you sure you entered the reight day there buddy?`);
        break;
}


// using an if-else ternary expression within the template literal, as the use of if else statemen is not allowed 
let salary = 20000;
console.log(`The amount required for the operation is ${ salary >= 1800 ? `available `: `not available`}`);















































































