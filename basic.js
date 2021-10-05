"use strict";
/** Checks the inputs are correct or not */
/** DATA TYPES LIKES STRING , NUMBER, AND BOOLEAN */
function add(num1, num2, bool, resultPhare) {
    // if (typeof  num1 !=="number" ||typeof num2 !== "number" )
    // {
    //     throw new Error("invalide input");
    // }
    var resutl1 = num1 + num2;
    if (bool) {
        console.log(resultPhare + resutl1);
    }
    else {
        return resutl1;
    }
}
var num1 = 3;
var num2 = 14.989;
var bool = true;
var resultPhare = " the final Result is ";
add(num1, num2, bool, resultPhare);
