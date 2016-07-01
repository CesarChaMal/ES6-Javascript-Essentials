//Imports and exports

import {animalName, jump, Animal} from "./animal";
//Note: Database is not inside brackets. Since it is our default export,
//we can name it whatever we want.
import Database from "./database";

//Log our variable
console.log(animalName);

//Execute our function
console.log(jump(animalName));

//Instantiate our class
const Tiger = new Animal();
//Call our roar function
console.log(Tiger.roar());

//Instantiate our database class
const Db = new Database();
