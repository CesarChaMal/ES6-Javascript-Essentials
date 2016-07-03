//Symbols

//Returns false because each symbol is unique
console.log(Symbol("Tiger") === Symbol("Tiger"));

const people = {};

//Have different values even though they look the same
const person1 = Symbol("Max"); //Represents Max Kaplan
const person2 = Symbol("Max"); //Represents Max Smith

people[person1] = "Max Kaplan";
people[person2] = "Max Smith";

console.log(people[person1]); //Returns Max Kaplan
console.log(people[person2]); //Returns Max Smith
