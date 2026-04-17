// Array, a collection of items in a single variable, while these
// items can be string, number, boolean or mix of datatype.

const details={
    country: "Pakistan",
    city: "Karachi"
}
let arr=["Hello",1,4,true,details]
console.log(arr); //contains items of mixed datatypes
console.log(arr[4]); // can be called by indexing or offset value

console.log(arr.length);

//concat() appends a value at the end of an array,
// and returns a new array without modifying any existing.
arr1 = arr.concat(5)
console.log(arr1);
console.log(arr)
// ----------- Shallow Copy--------------


// Is Shallow Copy a concept for Non-Primitives?
// Yes, effectively. While you can "shallow copy" an array of numbers,
//  the behavior of a shallow copy only becomes distinct from a deep 
// copy when non-primitive (objects/arrays) are involved. If a collection 
// contains only primitives, a shallow copy and a deep copy behave 
// identically (both are independent).
// The "hazard" of a shallow copy only exists because
// objects are stored as references (addresses).
arr2 = arr
arr2[4].city='Lahore';
console.log(arr2);
// Since, shallow copy is a concept of non-primitive datatype
// therefore changing 'details.city' from karachi to lahore,
// changes the city name in the original array 'arr'as well. 
// Non-primitive does not copy the value instead 
// they holds the reference of the copy.
console.log(arr);

// ---------lastly-------


// Primitives (String, Number, etc.): 
// Copied by Value. They become independent immediately.

// Non-Primitives (Object, Array, etc.):
// Copied by Reference. They remain connected at the nested level.

// The Container: The Array itself is a new instance,
// which is why arr !== shallowCopy is true.


arr.push(false) // pushes item at the end of the array
console.log(arr) 
arr.pop() //removes item from the end of the array
console.log(arr)
arr.unshift('Hey') // pushes item at the start of the array
console.log(arr) 
arr.shift() //removes item from the start of the array
console.log(arr);

// ------.includes() search the array at top level-------

console.log(arr2.includes('2'));

//---------.some() can look inside objects within an array------
// '===' is used as a comparison operator
// Here, item is used as a placeholder for each 'item'
// in the array. Checks every single box in the array one by one.

console.log(arr.some(item => item.country==='Pakistan'))

// Since details.country is "Pakistan", the test is true 
// on the very first try. It returns true, but it didn't
// actually "search" the array; it just checked that one
// specific variable you named.  

console.log(arr.some(() => details.country==='Pakistan'));


//--------.join()-----
// converts the arrays objects into string datatype

let arr4= arr1.join();
//Here, .split() converts the string into array again 
// which can be accessed using indexing, as shown below. 
console.log(arr4.split(',')[4])
console.log(typeof(arr4));

// .slice(start,end-1) extract a portion of an 
// array but does not change the orginal one.
console.log("Original Array -> ",arr);

arr5= arr.slice(1,4);
console.log("Slice Operation -> ",arr5);
console.log("Original Array after .slice() Operation -> ",arr);

// .splice(start,end) extract a portion of an 
// array and also change the orginal one by removing the
// extracted portion.
console.log("Original Array -> ",arr);
arr6=arr.splice(1,4)
console.log("Splice Operation -> ",arr6);
console.log("Original Array after .splice() Operation ->",arr);

