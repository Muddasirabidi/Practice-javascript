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
let currentrole = null
const bignumber= 345588399376255171n

console.log(typeof(name));
console.log(typeof(age));
console.log(typeof(username));
console.log(typeof(password));
console.log(typeof(isloggedin));
console.log(typeof(currentrole));
console.log(typeof(bignumber));


//both variables holds same value but still shows
// false as a result because 
// every symbol created is guaranteed to be unique.

console.log(username == username2); 

// Reference Type (Non Primitive) are of three types

// Arrays: list of values
// Objects: key-value pairs
// Functions


const mycars=["mclare", "artura", "speedtail"]
const details={
    country: "Pakistan",
    city: "Karachi"
}

const myfunc= function(){
    console.log('Hello from this part of the World!');
    
}

// The return type of non-primitive variables
// are 'object'.
console.log(typeof(mycars));
console.log(typeof(details));
console.log(typeof(myfunc)); //object funtion

