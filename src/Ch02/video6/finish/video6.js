//Arrow functions part 2

function Person() {
  this.age = 0;

  //Will not work with this type of function because "this" is not shared

  // setInterval(function() {
  //   this.age++;
  //   console.log(this.age);
  // },100);

  //Will work with arrow functions

  setInterval(() => {
    this.age++;
    console.log(this.age);
  },100);
}

new Person();
