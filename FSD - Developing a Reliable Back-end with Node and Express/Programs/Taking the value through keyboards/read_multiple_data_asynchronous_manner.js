// load the readline module using require() function
let readline = require('readline');
// create an interface for input and output using readline.createInterface() method
let obj = readline.createInterface({
    input: process.stdin,       // keyboard input
    output: process.stdout      // console output
});

// use question() method to ask a question and get the answer in asynchronous manner
obj.question("Enter your id: ", (id) => {
    
    obj.question("Enter your name: ", (name) => {
    
        obj.question("Enter your age: ", (age) => {
            console.log("Your id is: " + id);
            console.log("Your name is: " + name);
            console.log("Your age is: " + age);
            obj.close();
        });

    });

});