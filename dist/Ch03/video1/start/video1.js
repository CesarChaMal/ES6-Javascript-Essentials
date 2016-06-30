"use strict";

var _mockDb = require("../../modules/mock-db");

var db = new _mockDb.Database(); //ES6 Import syntax. We will go over this later


db.find(function (data) {
  console.log(data);
});