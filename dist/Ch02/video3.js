"use strict";

//Spread Operator

function multiply(a, b) {
  return a * b;
}

var nums = [10, 5];
console.log(multiply.apply(undefined, nums)); //Outputs 50

var updatedNums = [20].concat(nums, [30]);
console.log(updatedNums); //Outputs: [20, 10, 5, 30]