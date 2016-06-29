//Rest operator

function multiply(...nums) {
  let total = 1;
  for (var i in nums) {
    total = total * nums[i];
  }
  return total;
}

console.log(multiply(2,3,5,2)); //Outputs 60
