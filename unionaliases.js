"use strict";
function combine(num1 /**number|string */, num2, convert) {
    var resutl1;
    if (typeof num1 === "number" && num2 === "number" || convert === "as-a-Text") {
        resutl1 = +num1 + +num2;
    }
    else {
        resutl1 = num1.toString() + num2.toString();
    }
    return resutl1;
}
var comb = combine(30, 65, "as-a-number");
console.log(comb); // for this we declare it number that we mentained in above
var comb1 = combine("siva", "wiki", "as-a-number"); // but here we declare the string instread of number so for that we have to use pipe for declared the variable.
console.log(comb1);
var comb2 = combine('20', '4543', "as-a-number");
console.log(comb2);
