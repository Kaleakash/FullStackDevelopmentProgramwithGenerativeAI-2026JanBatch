// load the readline module using require() function
let readline = require('readline');
// create an interface for input and output using readline.createInterface() method
let obj = readline.createInterface({
    input: process.stdin,       // keyboard input
    output: process.stdout      // console output
});

// use question() method to ask a question and get the answer in asynchronous manner
obj.question("Enter your name: ", (name) => {
    console.log("You name is: " + name);
    //obj.close();
})


