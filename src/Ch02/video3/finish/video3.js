//Spread Operator

function multiply(a,b,c) {
  return a * b * c;
}

const nums = [10,5,2];
console.log(multiply(...nums)); //Outputs 100

const updatedNums = [20, ...nums, 30];
console.log(updatedNums); //Outputs: [20, 10, 5, 2, 30]
