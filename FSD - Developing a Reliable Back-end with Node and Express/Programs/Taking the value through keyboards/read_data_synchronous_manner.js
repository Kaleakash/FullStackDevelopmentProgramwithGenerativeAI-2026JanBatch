let obj = require("readline-sync");

// this function will ask the user to enter some data and store it in the variable message
// in synchronous manner, the program will wait until the user enters the data and presses enter key
let message = obj.question("please enter some data: ");
console.log("You entered: " + message);

let id = obj.questionInt("please enter your id: "); // with questionInt() method, the input will be converted to an integer
let name = obj.question("please enter your name: ");    // with question() method, the input will be treated as a string
let salary = obj.questionFloat("please enter your salary: ");   // with questionFloat() method, the input will be converted to a floating-point number
let emailId = obj.questionEMail("please enter your email id: ");   // with questionEMail() method, the input will be validated as an email address
let password = obj.questionNewPassword("please enter your password: ", { min: 8, max: 20, confirmMessage: "Please confirm your password: " });   // with questionNewPassword() method, the input will be treated as a password and will be hidden while typing, and it will also ask for confirmation of the password   
console.log("Your id is: " + id);
console.log("Your name is: " + name);
console.log("Your salary is: " + salary);
console.log("Your email id is: " + emailId);
console.log("Your password is: " + password);