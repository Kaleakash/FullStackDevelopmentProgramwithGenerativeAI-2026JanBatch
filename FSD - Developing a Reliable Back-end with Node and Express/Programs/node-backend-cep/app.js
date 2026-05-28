let express = require("express");
let fs = require("fs");

let app = express();


let PORT = 5000;


// middleware to parse urlencoded form data
app.use(express.urlencoded({extended: true}));

// set view engine to ejs
app.set('view engine','ejs');

// http://localhost:5000
app.get("/",(request,response)=> {
    let msg=""
    response.render("login",{msg});
})
// http://localhost:5000/signUpPage

app.get("/signUpPage",(request,response)=> {
    let msg=""
    response.render("signUp",{msg});
})

app.post("/signIn",(request,response)=> {
    let msg = "";
    let login = request.body;
    let loginFs = JSON.parse(fs.readFileSync("logins.json").toString())
let loginExists = loginFs.find(ll=>ll.emailId==login.emailId && ll.password == login.password);
    if(loginExists){
            let emailId = login.emailId;
            let employeesFs = JSON.parse(fs.readFileSync("employees.json").toString());
            response.render("dashboard",{emailId,employeesFs});
    }else {
        msg = "Invalid EmailId or password";
        response.render("login",{msg});
    }
})
app.post("/signUp",(request,response)=> {
    let msg = "";
    let login = request.body;
    let loginFs = JSON.parse(fs.readFileSync("logins.json").toString());
    let loginExists = loginFs.find(ll=>ll.emailId==login.emailId);
    if(loginExists){
            msg = "Account already exists";
            response.render("signUp",{msg});
    }else {
        msg = "Account created successfully"
        loginFs.push(login);
        fs.writeFileSync("logins.json",JSON.stringify(loginFs));
        response.render("signUp",{msg});
    }
})


app.get("/addEmployee",(request,response)=> {
    let msg=""
    response.render("addEmployee",{msg});
})

app.post("/addEmployeeInFile",(request,response)=> {
    let msg=""
    let employee = request.body;
    let employeesFs = JSON.parse(fs.readFileSync("employees.json").toString());
    employeesFs.push(employee);
    fs.writeFileSync("employees.json",JSON.stringify(employeesFs));
    msg="Employee Added successfully"
    response.render("addEmployee",{msg})
})

app.get("/viewEmployee",(request,response)=> {
    let msg=""
    let employeesFs = JSON.parse(fs.readFileSync("employees.json").toString());
    response.render("viewEmployee",{msg,employeesFs});
})

app.get("/updateEmployee",(request,response)=> {
    let msg=""
    response.render("updateEmployee",{msg});
})
app.get("/deleteEmployee",(request,response)=> {
    let msg=""
    response.render("deleteEmployee",{msg});
})

app.listen(PORT,()=>console.log(`Server running on port number ${PORT}`));