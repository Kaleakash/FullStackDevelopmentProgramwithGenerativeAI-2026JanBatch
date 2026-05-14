// load the user defined module 
let obj1 = require("./abc")
let hsbc = require("./hsbc");
let boa = require("./bankofamerica");

console.log("This is main.js file");
obj1.display1();
obj1.display2();
hsbc.withdraw(5000);
hsbc.deposit(10000);
boa.withdraw(2000);
boa.deposit(5000);