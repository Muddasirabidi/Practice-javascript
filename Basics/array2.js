let arr1=['a','b','c','d']
let arr2=['e','f','g','h']

// .push() adds the item at the end of an array
// and returns the length of it. Here, it considered
// array2 as a complete one object, making a list 
// within list.

arr1=[...arr1, ...arr2]
console.log(arr1);

// console.log(arr1.push(arr2));
// console.log(arr1);


// Returns a new array with all sub-array elements
// concatenated into it recursively up to the specified depth.
arr1= arr1.flat()

// ... (spread operator)
// The spread operator spreads each list's elements 
// and makes a list of objects without making list 
// within list.

arr=[...arr1,...arr2]
console.log(arr);

// Array.from() converts the String value passed in its argument
// into an array, making each alphabet as one element of the array.
// It returns an empty array when passed with integers or dictionary (object).
a={ name:"Muddasir"}
console.log(Array.from(a));

b="10/10"
c="Hello"

// Array.of() creates a new array from
// the argument passed to it and returns a list.
console.log(Array.of(c,a,b));

