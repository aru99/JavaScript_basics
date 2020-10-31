// tip calculator

const calc_tip = (bill_value) =>{
    let tip_value ; 
    if (bill_value > 50 && bill_value < 300){
        tip_value = bill_value* 0.15;
        return tip_value;
    } else if (bill_value < 50 || bill_value > 300){
        tip_value = bill_value * 0.20;
        return tip_value;
    }
}

// a better approch 
const calcTip = (bill_value) => bill_value >=50 && bill_value<= 300 ? bill_value *0.15 : bill_value*0.2;

//bills 

 const tip_array = [calc_tip(125), calc_tip(555), calc_tip(45)];
 console.log(tip_array);