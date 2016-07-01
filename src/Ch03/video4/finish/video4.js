// Promise shortcuts

//Shortcut for resolving a promise
const animal = Promise.resolve("Tiger");
animal.then(value => {
  console.log(value);
});

//Shortcut for rejecting a promise
const error = Promise.reject(new Error("This promise is rejected"));
//we pass null for fulfilled callback because we know this promise
//will be rejected
error.then(null, (error) => {
  console.log(error.message);
});
