//Intro to promises

//Basic promise syntax. A promise has 2 methods: fulfill and reject.
const promise = new Promise(function(fulfill, reject) {
  fulfill('The promise is fulfilled!');
});

//We will use this function as our fulfilled function
function onFulfilled(message) {
  console.log(message);
}

//We will use this function as our rejected function
function onRejected(error) {
  console.log(error.message);
}

//.then() is used to access the value of the promise
promise.then(onFulfilled, onRejected);
