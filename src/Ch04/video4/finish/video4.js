//WeakMap
const wm = new WeakMap();

const obj1 = {name:"Max"};
const obj2 = {name:"Sally"};

wm.set(obj1,"name is max");
wm.set(obj2,"name is sally");

//Will not work. Key must be an object
// wm.set("testing","name is testing");

console.log(wm.get(obj1));
console.log(wm.get(obj2));

//You can not access WeakMap keys.
// const keys = wm.keys();

//Will return undefined. Can not get WeakMap size
// console.log(wm.size);
