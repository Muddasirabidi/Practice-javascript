
// ------Input from User-------
// const readline= require("readline");
// const rl=readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
//  const user = [];
// rl.question("My Questions", (answer)=>{
// rl.question("What is your name? ", (name) => {
//     user[0] = name;

//     rl.question("What is your age? ", (age) => {
//         user[1] = age;

//         rl.question("What is your city? ", (city) => {
//             user[2] = city;

//             console.log(user);

//             rl.close();
//         });
//     });
// });
// });
let name=["Muddasir", "Abidi"]
const result=[]

function saymyname(array){
    array.forEach(element => {
        for (const value of element){
            result.push(value);
            
        }
        
    }
)
return(result);
};


o=saymyname(name);
console.log("1st");

o.forEach(element=>{
    console.log(element);
    
})
console.log("2nd");
for (const value of o){
    console.log(value)
}
console.log("3rd");
// It will throw an undefined error if the value is not returned in the function!
console.log("Output of saymyname function is:", o);


