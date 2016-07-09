//Maps

const myMap = new Map();

const obj = {value:true};
const func = function() {console.log("HEY")};
const string  = "testing";

myMap.set(func,"value associated with function.");
myMap.set(obj,"value associated with object.");
myMap.set(string,"value associated with string.")

console.log(myMap.get(obj));
console.log(myMap.get(func));
console.log(myMap.get(string)); //Will work with string or "testing"
console.log(myMap.size);

//Returns an iterator object like a generator that we can use for..of for

for (let key of myMap.keys()) {
  console.log(key);
}
