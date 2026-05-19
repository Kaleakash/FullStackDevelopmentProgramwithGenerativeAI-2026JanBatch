let express = require('express');
let app = express();
let emp1 = {id: 1, name: 'John Doe', position: 'Software Engineer'};
let emp2 = {id: 2, name: 'Jane Smith', position: 'Project Manager'};
let emp3 = {id: 3, name: 'Alice Johnson', position: 'UX Designer'};
let employees = [emp1, emp2, emp3];

// add middleware to parse JSON request bodies

app.use(express.json()); // to enable parsing of JSON request bodies

// get all details 
// http://localhost:3000/employees
app.get('/employees', (req, res) => {
    res.json(employees);
})
// search employee using id
// http://localhost:3000/findEmployeeById/2
app.get('/findEmployeeById/:id', (req, res) => {
    let id = parseInt(req.params.id);
    let employee = employees.find(emp => emp.id === id);
    if(employee) {
        res.json(employee);
    } else {
        res.status(404).json({message: 'Employee not found'});
    }
})

// http://localhost:3000/addEmployee
// method : post 
//data : {id: 4, name: 'Bob Brown', position: 'QA Engineer'}

app.post("/addEmployee", (req, res) => {
    let newEmployee = req.body;
    let employeeExists = employees.some(emp => emp.id === newEmployee.id);
    if(employeeExists) {
        res.status(400).json({message: 'Employee with this ID already exists'});
    } else {
        employees.push(newEmployee);
        res.status(201).json({message: 'Employee added successfully', employee: newEmployee});
    }
});

// http://localhost:3000/updateEmployeePosition
// method : patch 
//data :  {id: 1, position: 'Senior Software Engineer'}

app.patch("/updateEmployeePosition", (req, res) => {
    let newEmployee = req.body;
    let employeeIndex = employees.findIndex(emp => emp.id === newEmployee.id);
    if(employeeIndex<0) {
        res.status(400).json({message: `Employee not present}`});
    } else {
        employees[employeeIndex].position=newEmployee.position;
        res.status(201).json({message: 'Employee position Updated successfully'});
    }
});

// http://localhost:3000/deleteEmployeeById/1
// method : delete 

app.delete("/deleteEmployeeById/:id", (req, res) => {
    let id = parseInt(req.params.id);
    let employeeIndex = employees.findIndex(emp => emp.id === id);
    if(employeeIndex<0) {
       res.status(400).json({message: `Employee not present}`});
    } else {
        employees.splice(employeeIndex,1);      // 1st parameter index position and 2nd parameter index position
        res.status(201).json({message: 'Employee deleted successfully'});
    }
});



app.listen(3000, ()=>console.log('Server is running on port 3000'));    