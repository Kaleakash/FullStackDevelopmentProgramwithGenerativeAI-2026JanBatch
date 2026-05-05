let fs = require('fs');
let RawData = fs.readFileSync("employee.json");
console.log("Raw data read from employee.json file: ", RawData);// it is in buffer format
// we need to convert buffer data into string format
let RawDataStringFormat = RawData.toString();           // string format 
console.log("Data converted to string format: ", RawDataStringFormat);
// we need to convert string data into object format
let EmployeeObject = JSON.parse(RawDataStringFormat);
console.log("Data converted to object format: ", EmployeeObject);
console.log("Employee name: ", EmployeeObject.name);
console.log("Employee age: ", EmployeeObject.age);
console.log("Employee id: ", EmployeeObject.id);