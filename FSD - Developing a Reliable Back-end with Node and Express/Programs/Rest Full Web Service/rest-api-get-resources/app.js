let express = require('express');
let app = express();

// JavaScript object in literal format. 
let employee = {
    id: 1,
    name: "John Doe",
    position: "Software Engineer"
};
let emp1 = {
    id: 2,
    name: "Jane Smith",
    position: "Product Manager"
}
let emp2  = {
    id: 3,
    name: "Alice Johnson",
    position: "UX Designer"
}
let emp3 = {
    id: 4,
    name: "Bob Brown",
    position: "Data Analyst"
}
let employees = [emp1, emp2, emp3];

// http://localhost:3000/api/employee
app.get("/api/employee", (req, res) => {
    res.json(employee);
});

// http://localhost:3000/api/employees
app.get("/api/employees", (req, res) => {
    res.json(employees);
});

// search employee by id with query parameter
// http://localhost:3000/api/findEmployeeByIdUsingQuery?id=2
app.get("/api/findEmployeeByIdUsingQuery", (req, res) => {
    let id = parseInt(req.query.id);    // converting string to number
    let emp = employees.find(e => e.id === id);
    if(emp) {
        res.json(emp);
    } else {
        res.status(404).json({ message: "Employee not found" });
    }   
});

// search employee by id with path parameter
// http://localhost:3000/api/findEmployeeByIdUsingPath/2

app.get("/api/findEmployeeByIdUsingPath/:id", (req, res) => {
    let id = parseInt(req.params.id);    // converting string to number
    let emp = employees.find(e => e.id === id);
    if(emp) {
        res.json(emp);
    } else {
        res.status(404).json({ message: "Employee not found" });
    }   
});


app.listen(3000, ()=>console.log('Server is running on port 3000'));