let fs = require("fs");
let emp1 = {id:1, name:"John", age:30, department:"HR"};
let emp2 = {id:2, name:"Jane", age:25, department:"IT"};
let emp3 = {id:3, name:"Doe", age:28, department:"Finance"};
let employees = [emp1, emp2, emp3];
// Employee data to be written to file
    let emp4 = {id:5, name:"Bob", age:34, department:"Operations"};
// Read the Data from File
let EmployeeRawData = fs.readFileSync("employees.json");
let EmployeeData = JSON.parse(EmployeeRawData.toString());
if(EmployeeData.length > 0){
    console.log("Employee data read from file:");
    console.log(EmployeeData);
    let employeePresent = EmployeeData.find(emp => emp.id === emp4.id);
    if(employeePresent){
        console.log(`Employee with id ${emp4.id} already exists.`);
    }else {
        EmployeeData.push(emp4);
        fs.writeFileSync("employees.json", JSON.stringify(EmployeeData));
        console.log(`Employee with id ${emp4.id} has been added to employees.json`);
    }
}else {
    // Write the Data to File
    fs.writeFileSync("employees.json", JSON.stringify(employees));
    console.log("Employee data has been written to employees.json");
}