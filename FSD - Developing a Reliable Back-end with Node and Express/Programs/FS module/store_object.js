let fs = require("fs");
let emp1 = {id: 1, name: "John", age: 30};
// we need convert object into string before storing in file
emp1StringFormat = JSON.stringify(emp1);// JSON is a global object in JavaScript which provides methods to convert JavaScript objects to JSON strings and vice versa.   
fs.writeFileSync("employee.json", emp1StringFormat);
console.log("Employee object stored in employee.json file");
