var express = require('express');
var router = express.Router();

let employee = {id:100, name:"John Doe", department:"IT"};

let employee1 = {id:101, name:"Jane Smith", department:"HR"};
let employee2 = {id:102, name:"Bob Johnson", department:"Finance"};
let employee3 = {id:103, name:"Alice Williams", department:"Marketing"};
let employees = [employee, employee1, employee2, employee3];


router.get("/view-employee", (req, res) => {
  res.render("employee", { employee: employee });
});

router.get("/view-employees",(req, res) => {
    res.render("employees", { employees: employees });
});

module.exports = router;