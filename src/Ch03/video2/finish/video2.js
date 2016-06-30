//Resolve or Reject Promises

//We create a function that returns a promise
function testPromise(value) {
  return new Promise((fulfill,reject) => {
    if (value===true) {
      fulfill("The promise has been fulfilled");
    }
    else {
      reject(new Error("The promise was rejected"));
    }
  });
}

//Set one value to true and the other to false
const trueValue = testPromise(true);
const falseValue = testPromise(false);

//Declare our onFullfied function
function onFulfilled(message) {
  console.log(message);
}
//Declare our onRejected function
function onRejected(error) {
  console.log(error.message);
}
trueValue.then(onFulfilled, onRejected);
falseValue.then(onFulfilled, onRejected);
