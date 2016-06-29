function multiply(a,b) {
  return a * b;
}

const nums = [10,5];
console.log(multiply(...nums)); //Outputs 50

const updatedNums = [20, ...nums, 30];
console.log(updatedNums); //Outputs: [20, 10, 5, 30]
