'use strict';

// the following calsses were based on es6 
class human {
    constructor(){
        this.gender = 'male';
    }
    print_gender(){
        console.log(this.gender);
    }
}

class Person extends human {
    constructor(){
        super();
        this.name = 'max';
    }

    print_my_name(){
        console.log(this.name)
    }
}

const person = new Person();
person.print_my_name();
person.print_gender();

// the following classes would be based on es7

class Human2 {
    gender = 'male';
    print_gender2 = () => {
        console.log(this.gender);
    }
}

class Person2 extends Human2{
    name = `max`;
    print_my_name2 = ()=>
    {
        console.log(this.name);
    }
}

const person2 = new Person2();
person2.print_my_name2();
person2.print_gender2();

// spread and rest operator
// spread
const old_arrray = [110,20,30,40,50,60];
const new_array = [...old_arrray, 70,80];
console.log(old_arrray, new_array);
const user = {
    first_name : 'max',
    last_name : `smith`,
    date_of_birth : `30/4/1998`
}

const max_profile = {
    ...user,
    status : `single`,
    avg : `56`
}
console.log(max_profile);
//rest 
const filter = (...args) ={
    return args.filter(el => el === 1);
}

console.log(filter(1,2,3));





















































