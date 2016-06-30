export class Database {
  constructor() {
    this.data =  [
      {
        id: 1,
        name: "Max Kaplan",
        username: "maxkaplan",
        sex: "m",
        phone: "111-111-1111"
      },
      {
        id: 2,
        name: "Sally Simon",
        username: "sallysimon",
        sex: "f",
        phone: "222-222-2222"
      },
      {
        id: 3,
        name: "Ben Smith",
        username: "bensmith",
        sex: "m",
        phone: "333-333-3333"
      }

    ];
  }
  findUser(searchObj) {
    //This is our flag that will tell us to fulfill or reject our promise
    let found = false;
    //If a record is found, this will contain the data for that user
    let foundUser = {};
    //Tells us which field to check against in the user data
    const field = Object.keys(searchObj);

    return new Promise((fulfill,reject) => {
      for (var i=0;i<this.data.length;i++) {
        if (this.data[i][field] === searchObj[field]) {
          found = true;
          foundUser = this.data[i];
          break;
        }
      }

      //If the record was found fulfill the promise with the right user object
      if (found === true) {
        fulfill(foundUser);
      }
      //If the record was not found return error saying no user found
      else {
        reject(new Error("No user found"));
      }
    });
  }
}
