//Promise.all

import {Database} from "../../modules/mock-db";
const db = new Database();

const max = db.findUser({username:"maxkaplan"});
const sally = db.findUser({username:"sallysimon"});
const ben = db.findUser({username:"bensmith"});
const noone = db.findUser({username:"noone"});

//All of these will return fulfilled promises
Promise.all([max,sally,ben])
.then(users => {
  users.forEach(user => {
    console.log(user.name);
  });
  console.log("FIRST PROMISE.ALL ENDED");
});

//If one promise is rejected, nothing in the fulfilled block gets executed
Promise.all([max,noone])
.then(user => {
  console.log(user);
}, error => {
  console.log(error.message);
});
