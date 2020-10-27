// Mark
let mark_mass = prompt('enter marks mass : ');
let mark_height = prompt('whta is marks height : ');

//John 
let john_mass = prompt('enter johns mass');
let john_height = prompt('whta is johns height');

//calculating BMIs
let mark_bmi = mark_mass / mark_height^2;
let john_bmi = john_mass/ john_height^2;
console.log(mark_bmi, john_bmi);

//comparison 
//compare_bmi = mark_bmi > john_bmi;
//exception_compare_bmi = (mark_bmi == john_bmi)
//console.log('is marks BMI higher than johns ? '+ compare_bmi);
if (mark_bmi > john_bmi){
    console.log('mark\'s BMI higher than john\'s');
}else if(mark_bmi == john_bmi) {
    console.log('marks\'s BMI is euqal to john\'s');
}else if (mark_bmi < john_bmi){
    console.log('marks\'s BMI is not higheer than john\'s');
}


//adding another comparision that uses literals to print the BMI values
if (mark_bmi > john_bmi) {
    console.log(`mark's BMI of ${mark_bmi} is  higher than john's BMI of ${john_bmi}`);
    
}else if (mark_bmi === john_bmi) {
    console.log(`marks's BMI is euqal to john's BMI of ${john_bmi}`);
}else if (mark_bmi < john_bmi){
    console.log(`John's BMI of ${john_bmi} is higher than Mark's BMI of ${mark_bmi} `);
} 














