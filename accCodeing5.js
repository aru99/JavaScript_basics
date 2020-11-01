"use strict";

const display_temperature = (arry_temp) => {
  let str = "";
  for (let i = 0; i < arry_temp.length; i++) {
    str += `${arry_temp[i]} deg C in ${i} days...`;
  }
  console.log("  " + "..." + str);
};

display_temperature([10, 11, 29, 14, 15]);
