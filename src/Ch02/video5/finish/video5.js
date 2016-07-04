//Intro to arrow functions

const names = ['max','john','michael','sarah'];

const num = () => 3*2;
console.log(num());

const capitalNames = names.map(name => {
  return name.toUpperCase();
});

console.log(capitalNames);
