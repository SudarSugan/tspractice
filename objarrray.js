"use strict";
// const person:{
//     name: string;
//     age: number;
// }= {     this typescript representation of objects
var person1 = {
    name: "siva",
    age: 30
};
console.log(person1.name);
/** It is an array using properties */
var person = {
    name: "siva",
    age: 30,
    hobbies: ["games", "cooking", "eating"]
};
var favouriteActivities;
favouriteActivities = ["sun", 1]; // error occur due to the string declaration in the above line for ommite this error we have to declar instread of string use any
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobbies = _a[_i];
    console.log(hobbies);
}
