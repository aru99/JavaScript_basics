'use strict';

// let has_drivers_licence = false;
// const passTest = true;

// if (passTest) has_driver_licence = true;
// if (passTest) has_drivers_licence= true;

function fruit_processor(fruit_1, fruit_2) {
    console.log(fruit_1, fruit_2);
    const juice = `Juice of ${fruit_1} and ${fruit_2}`;
    return juice;
}

const order_juice = fruit_processor(`apple`, `oranges`);
console.log(order_juice);