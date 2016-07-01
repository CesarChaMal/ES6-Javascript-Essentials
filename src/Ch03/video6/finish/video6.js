//Classes

class NameFormatter {
  constructor(first, last) {
    this.first = first;
    this.last = last;
  }
  //This method will always capitalize the first letter in the name
  capitalizer(name) {
    //First we capitalize the first letter
    const firstLetter = name.charAt(0).toUpperCase();
    //Then we form and return a new string with the capitalized first letter and the rest
    //of the string
    return `${firstLetter}${name.slice(1,name.length)}`;
  }
  fullName() {
    const firstName =  this.capitalizer(this.first);
    const lastName = this.capitalizer(this.last);
    return `${firstName} ${lastName}`;
  }
  lastFirst() {
    return `${this.capitalizer(this.last)}, ${this.capitalizer(this.first)}`;
  }
}

//We instantiate our class
const name = new NameFormatter("max","kaplan");

console.log(`This persons full name is ${name.fullName()}.`);
console.log(`In "Last, First" format, this persons name is ${name.lastFirst()}.`);
