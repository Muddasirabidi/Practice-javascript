//  Important Methods in Number datatype Of JavaScript

let newNumber = new Number(20000000000);

console.log(newNumber.toLocaleString('en-PK'
)); // converting a number to a local standard apart from eng

newNumber=200000928.9982
console.log(newNumber.toFixed(2)
) // rounds off a number to the decimal numbers mentioned in its parameter

console.log(newNumber.toPrecision(3)
) // only gives the answer within the precision range

console.log(Math.ceil(newNumber))

console.log(Math.floor(newNumber))



// Getting random dice number for our ludo game

const max=6 //max dice number
const min=1 //max dice number
console.log(Math.floor   (Math.random()   * (max   -  min   +   1)  +    1));
        // (round down),(generates random n.o),(limits the range 1-6),(for no '0'on dice while rolling)
                                 
        
        