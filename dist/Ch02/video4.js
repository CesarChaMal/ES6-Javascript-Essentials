"use strict";

//Rest operator

function multiply() {
  var total = 1;

  for (var _len = arguments.length, nums = Array(_len), _key = 0; _key < _len; _key++) {
    nums[_key] = arguments[_key];
  }

  for (var i in nums) {
    total = total * nums[i];
  }
  return total;
}

console.log(multiply(2, 3, 5, 2)); //Outputs 60