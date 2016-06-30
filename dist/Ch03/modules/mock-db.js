"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Database = exports.Database = function () {
  function Database() {
    _classCallCheck(this, Database);

    this.data = [{
      id: 1,
      name: "Max Kaplan",
      username: "maxkaplan",
      sex: "m",
      phone: "111-111-1111"
    }, {
      id: 2,
      name: "Sally Simon",
      username: "sallysimon",
      sex: "f",
      phone: "222-222-2222"
    }, {
      id: 3,
      name: "Ben Smith",
      username: "bensmith",
      sex: "m",
      phone: "333-333-3333"
    }];
  }

  _createClass(Database, [{
    key: "findUser",
    value: function findUser(searchObj) {
      var _this = this;

      //This is our flag that will tell us to fulfill or reject our promise
      var found = false;
      //If a record is found, this will contain the data for that user
      var foundUser = {};
      //Tells us which field to check against in the user data
      var field = Object.keys(searchObj);

      return new Promise(function (fulfill, reject) {
        for (var i = 0; i < _this.data.length; i++) {
          if (_this.data[i][field] === searchObj[field]) {
            found = true;
            foundUser = _this.data[i];
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
  }]);

  return Database;
}();