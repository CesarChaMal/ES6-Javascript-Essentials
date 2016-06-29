"use strict";

var firstName = "Max";
// firstName = "Kaplan"; WILL THROW ERROR BECAUSE IT IS ALREADY SET AND NOW "READ-ONLY"
// let firstName = "Max"; WILL THROW ERROR BECAUSE CONST IS ALREADY DECLARED
console.log(firstName);

var lastName = "Kaplan";
lastName = "Smith"; //WILL WORK BECAUSE WITH LET WE CAN OVERWRITE ORIGINAL VALUE
// let lastName = "Smith"; WILL NOT WORK BECAUSE ALREADY DECLARED
console.log(lastName);

function testing() {
  var foo = 1;
  var bar = 3;
  var animal = "Dog";
  if (true) {
    var _foo = 2;
    var _bar = 4;
    var color = "Red";
    console.log("INSIDE: " + _foo + " " + _bar + " " + animal); //Outputs: INSIDE 2 4 Dog
  }
  console.log("OUTSIDE: " + foo + " " + bar); //Outputs: OUTSIDE 1 3
  //console.log(color); Color is undefined
}
testing();