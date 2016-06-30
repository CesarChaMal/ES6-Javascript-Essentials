//Intro to arrow functions

const names = ['max','john','michael','sarah'];

//ES5 Way
let capitalNames = names.map(function(name) {
  return name.toUpperCase();
});
console.log(capitalNames);

//ES6 Basic Arrow Function Syntax
let num = () => 3 * 2;
console.log(num());

//How we can use it in our map function
let capitalNames6 = names.map((name) => {
  return name.toUpperCase();
});
console.log(capitalNames6);
