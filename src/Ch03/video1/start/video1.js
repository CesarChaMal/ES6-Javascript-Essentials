//ES6 Import syntax. We will go over this later
import {Database} from "../../modules/mock-db";
var db = new Database();

db.find(function(data) {
  console.log(data);
});
