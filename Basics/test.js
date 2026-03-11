// concatenation

let name= 'Muddasir' // let, with a variable name, accepts a change in value
const lname= ' Abidi' // const, with a variable means, a no change in value 
console.log(name + "" +lname);

name ='Nouman' // the code still run
console.log(name);
// lname =  'Ali'

// console.log(name + lname);  Error, because a change in const variable has been made which is not acceptable.

// Understanding operations on Null datatype

console.log(null > 0);
console.log(null < 0);
console.log(null >= 0);
console.log(null <= 0);
console.log(null == 0);
console.log(null != 0);
console.log(null === 0); // (Strict checks the datatype and does not allow conversion while comparison)