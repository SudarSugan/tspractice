"use strict";
function add(n1, n2) {
    return n1.toString() + n2.toString(); // error because we said it as a string but we said above has a number that's it says error
}
function printresult(num) {
    console.log('result' + num);
}
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
printresult(add(5, 12));
var combinevalues;
combinevalues = add;
//combinevalues=printresult;
//combinevalues=5;// it will says that it was not a function
console.log(combinevalues(8, 8));
addAndHandle(10, 20, function (result) {
    console.log(result);
});
