//Generators

//We must import babel-polyfill to use generators
import "babel-polyfill";

function *range(start,end) {
  for (let i=start; i<=end; i++) {
    yield i;
  }
}

//Instantiate the generator
let generator = new range(1,5);
//Call the next method
console.log(generator.next()); //{ value: 1, done: false }
console.log(generator.next()); //{ value: 2, done: false }
console.log(generator.next()); //{ value: 3, done: false }
console.log(generator.next()); //{ value: 4, done: false }
console.log(generator.next()); //{ value: 5, done: false }
//done is finally set to true AFTER it returns value 5.
console.log(generator.next()); //{ value: undefined, done: true }

//You can also call generators like so with these new loops
let arr = [];
for (let r of range(6,10)) {
  arr.push(r);
}
console.log(arr);
