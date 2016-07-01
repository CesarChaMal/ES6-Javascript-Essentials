"use strict";

var _mockDb = require("../../modules/mock-db");

var db = new _mockDb.Database(); //Promise.all

var max = db.findUser({ username: "maxkaplan" });
var sally = db.findUser({ username: "sallysimon" });
var ben = db.findUser({ username: "bensmith" });
var noone = db.findUser({ username: "noone" });