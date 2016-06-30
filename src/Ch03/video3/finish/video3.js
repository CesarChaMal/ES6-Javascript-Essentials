//Promise Chaining

//ES6 Import Syntax. We will go over this later.
import {Database} from "../../modules/mock-db";
const db = new Database();
// console.log(db.findUser({username: "maxkaplan"}));

//We declare a function that returns the full name of a user object
function getFullName(data) {
  return new Promise((fulfill,reject) => {
    fulfill(data['name'].toUpperCase());
  });
}

//We search our mock database for a user with a username of "maxkaplan"
db.findUser({username: "maxkaplan"}).then((user) => {
  //If a user is found, send all the user object to getFullName()
  return getFullName(user);
}, (error) => {
  console.log(error.message);
})
//This is where we handle our second promise from getFullName()
.then((name) => {
  console.log(name);
});

//Notice how "No user found" outputs before "MAX KAPLAN". This proves that
//promises are truly asynchronous. Since there is only one promise to resolve here
//it takes less time to execute this block so this outputs first even though it is below
//the first promise block.
db.findUser({username: "maxkaplan1"}).then((user) => {
  return getFullName(user);
}, (error) => {
  console.log(error.message);
});
