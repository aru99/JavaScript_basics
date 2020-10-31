// creating properties for Mark and John 
const mark = {
    full_name : `mark johanson`,
    mass : 78,
    height : 1.69,
    calcBmi : function(){
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
    }
};




const John = {
    full_name : `john johanson`,
    mass : 92,
    height : 1.95,
    calcBmi : function(){
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
    }
};

// comparing
if(mark.calcBmi() < John.calcBmi()){
    console.log(`Johns calcBmi ${John.calcBmi()} is greater than marks calcBmi of ${mark.calcBmi()}`)
}else if ( mark.calcBmi() > John.calcBmi()){
    console.log(`Marks calcBmi ${mark.calcBmi()} is greater than John's BMI of ${John.calcBmi()}`)
}



























