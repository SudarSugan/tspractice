// const person:{
//     name: string;
//     age: number;
// }= {     this typescript representation of objects
const person1={
    name : "siva",
    age:30
};
console.log(person1.name)


/** It is an array using properties */
const person={
    name : "siva",
    age:30,
    hobbies: ["games", "cooking", "eating"]
};

let favouriteActivities: any[];
favouriteActivities= ["sun",1] // error occur due to the string declaration in the above line for ommite this error we have to declar instread of string use any

console.log(person.name);
for (const hobbies of person.hobbies){
    console.log(hobbies);
}