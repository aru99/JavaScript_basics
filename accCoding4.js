const bills =[22, 295,176, 440, 37, 105, 10,1100, 56,52];

let tips =[];
let total =[];

calcTip = (bill_value) =>{
    return bill_value >=50 && bill_value<= 300 ? bill_value *0.15 : bill_value*0.2;
}

let test = calcTip(bills[3]);
console.log(test);

for( i = 0
    ; i <= bills.length; i++){
    let tip_value = calcTip(bills[i]);
    console.log(tip_value);

    tips.push(tip_value);
    console.log(tips, tips.length);

    total.push(tip_value + bills[i]);
    console.log(total, total.length);

}