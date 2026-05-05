let fs = require("fs");
let emp1 = {id: 3, name: "Bob", age: 35};
// we need convert object into string before storing in file
emp1StringFormat = JSON.stringify(emp1);// JSON is a global object in JavaScript which provides methods to convert JavaScript objects to JSON strings and vice versa.   
fs.writeFileSync("employee.json", emp1StringFormat);    // override existing data in employee.json file
//fs.appendFileSync("employee.json", emp1StringFormat);    // append data in employee.json file
console.log("Employee object stored in employee.json file");
