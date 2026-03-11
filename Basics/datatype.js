// Primitive dataypes are of 7 types

// String: Text 
// Number: Integers
// Undefined: variable declared in memory but not assigned yet
// boolean: True or False
// Symbol: specifying a variable as unique and immutable
// Null: empty value
// BigInt: stores large integers


const name="Muddasir"
const age = 22
const username=Symbol("mud@gmail.com")
let password; // did not use const since it requires initialization of variables and i want to show this variable as of undefined datatype.
const isloggedin = false
const username2=Symbol("mud@gmail.com") 

//both variables holds same value but still shows
// false as a result because 
// every symbol created is guaranteed to be unique.

console.log(username == username2); 

let currentrole = null



// Reference Type (Non Primitive) are of three types

// Arrays, Objects, Functions
