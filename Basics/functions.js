name=["Muddasir", "Abidi"]
const readline= require("readline");
rl=readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
 const user = [];

rl.question("What is your name? ", (name) => {
    user[0] = name;

    rl.question("What is your age? ", (age) => {
        user[1] = age;

        rl.question("What is your city? ", (city) => {
            user[2] = city;

            console.log(user);

            rl.close();
        });
    });
});


function saymyname(array){
    array.forEach(element => {
        for (const value of element){
            console.log(value);
            
        }
    });
}

saymyname(name);

