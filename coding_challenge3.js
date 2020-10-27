// Tip calculator challenge 

//bill amounts
var bills = [124, 48, 268];
//array for storing the tip values
var tip_coll =[];

//tip calculator function, (bill amount)
function tip_calculator(bill_amount)
{
    var tip;
    if (bill_amount < 50 && bill_amount > 0){
        tip = bill_amount * 0.2;
        tip_coll.push(tip);
    } else if ( bill_amount > 50 && bill_amount < 200){
        tip = bill_amount * 0.15;
        tip_coll.push(tip);
    } else if( bill_amount > 200){
        tip = bill_amount * 0.1;
        tip_coll.push(tip);
    }

    //the final amount to be paid
    var final_amount = bill_amount + tip;
    return final_amount; 
}

// array to store fial amount values 
var final_amount_to_pay = [];
for( var i = 0; i < bills.length; i++)
{
    final_amount_to_pay.push(tip_calculator(bills[i]));
}

console.log(final_amount_to_pay);
console.log(tip_coll);