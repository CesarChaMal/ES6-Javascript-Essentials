//Let and const
const name = "Max";

let lastName = "Kaplan";
lastName = "Smith";

console.log(lastName);

function testing() {
  let foo = 1;
  const bar = 3;
  if (true) {
    let foo = 2;
    const bar = 4;
    console.log("INSIDE: " + foo + " " + bar);
  }
  console.log("OUTSIDE: " + foo + " " + bar);
}
testing();
