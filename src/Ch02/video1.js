const firstName = "Max";
// firstName = "Kaplan"; WILL THROW ERROR BECAUSE IT IS ALREADY SET AND NOW "READ-ONLY"
// let firstName = "Max"; WILL THROW ERROR BECAUSE CONST IS ALREADY DECLARED
console.log(firstName);

let lastName = "Kaplan";
lastName = "Smith"; //WILL WORK BECAUSE WITH LET WE CAN OVERWRITE ORIGINAL VALUE
// let lastName = "Smith"; WILL NOT WORK BECAUSE ALREADY DECLARED
console.log(lastName);

function testing() {
  let foo = 1;
  const bar = 3;
  const animal = "Dog";
  if (true) {
    let foo = 2;
    const bar = 4;
    const color = "Red";
    console.log("INSIDE: " + foo + " " + bar + " " + animal); //Outputs: INSIDE 2 4 Dog
  }
  console.log("OUTSIDE: " + foo + " " + bar); //Outputs: OUTSIDE 1 3
  //console.log(color); Color is undefined
}
testing();
