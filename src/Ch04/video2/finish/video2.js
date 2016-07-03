//Sets
const set = new Set();

set.add(1);
set.add(3);
set.add(195);
set.add("max");
set.add(3); //This will be ignored because 3 is already in the set

console.log(set); // {1, 3, 195, 'max'}
console.log(set.has(3)); //returns true
console.log(set.has(10)); //returns false

set.delete(1);
console.log(set); // {3, 195, 'max'}
