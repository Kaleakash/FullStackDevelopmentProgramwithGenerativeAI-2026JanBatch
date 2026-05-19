let express = require("express");
let mongodb = require("mongodb");

let app = express();
let URL = "mongodb://localhost:27017";

app.use(express.json());        // enable post request json data 

let client = new mongodb.MongoClient(URL);
let dbName,employeeCollection;

async function dbConnect() {
    try{    
        await client.connect(); // connecting mongo db server 
        console.log("mongo Db Connected successfully")
        dbName = client.db("test_db");  // link to particular db 
        employeeCollection = dbName.collection("employees"); // link to particular collection 
    }catch(error){
        console.log(error.message)
    }
}
dbConnect();

// find all employee details 
// method : get 
// http://localhost:3000/api/employees 
app.get("/api/employees",async (request,response)=> {
    try{
    let employeesFromDb = await employeeCollection.find().toArray();
    response.status(200).json(employeesFromDb);
    }catch(error){
        response.status(404).json({"msg":error.message});
    }
})
// search Employee using id 
// method : get 
// http://localhost:3000/api/findEmployee/1 
app.get("/api/findEmployee/:id",async (request,response)=> {
    try{
    let id = parseInt(request.params.id)
    let employee = await employeeCollection.find({_id:id}).toArray();
    if(employee.length!=0){
        response.status(200).json(employee);
    }else {
        response.status(200).json({"message":`Employee not present with id as ${id}`});
    }    
    }catch(error){
        response.status(404).json({"msg":error.message});
    }
})

// search Employee using salary condition 
// method : get 
// http://localhost:3000/api/salaryRange/2000/4000
app.get("/api/salaryRange/:minSalary/:maxSalary",async (request,response)=> {
    try{
    let minSalary = parseFloat(request.params.minSalary)
    let maxSalary = parseFloat(request.params.maxSalary);

    let employee = 
    await employeeCollection.find({$and:[{salary:{$gt:minSalary}},{salary:{$lt:maxSalary}}]}).toArray();
    if(employee.length!=0){
        response.status(200).json(employee);
    }else {
        response.status(200).json({"message":`No Employee present with range salary as ${minSalary} and ${maxSalary}`});
    }    
    }catch(error){
        response.status(404).json({"msg":error.message});
    }
})

// post new document in employee collection 
// method : post 
// http://localhost:3000/api/storeEmployee 
/* data {
    "_id": 10,
    "fname": "Steven",
    "age": 28,
    "salary": 4500,
    "city": "Dallas",
    "designation": "Developer",
    "job_id": "IT_PROG"
  }
    */
app.post("/api/storeEmployee",async (request,response)=> {
    try{
        let newEmployee = request.body;
        let result = await employeeCollection.insertOne(newEmployee);
         response.status(200).json({"msg":result});
    }catch(error){
         response.status(404).json({"msg":error.message});
    }
})


// update employee salary using _id property  
// method : patch/put 
// http://localhost:3000/api/updateEmployeeSalary 
/* data {
    "_id": 1,
    "salary": 3600
    
  }
    */
app.patch("/api/updateEmployeeSalary",async (request,response)=> {
    try{
        let employee = request.body;
        let id = employee._id;
        let newSalary = employee.salary;

        let result = await employeeCollection.updateOne({_id:id},{$set:{salary:newSalary}});
        if(result.matchedCount>0){
            if(result.modifiedCount==1){
                response.status(200).json({"msg":`Employee salary updated successfully`});
            }else {
                response.status(200).json({"msg":`Salary didn't update old salary and new salary is same`});
            }
        }else {
             response.status(200).json({"msg":`Employee not present with id as ${id}`});
        }
       
    }catch(error){
         response.status(404).json({"msg":error.message});
    }
})



// delete employee information using _id property  
// method : delete 
// http://localhost:3000/api/deleteEmployeeUsingId/1 

app.delete("/api/deleteEmployeeUsingId/:id",async (request,response)=> {
    try{
        let id = parseInt(request.params.id);
        let result = await employeeCollection.deleteOne({_id:id});
        if(result.deletedCount>0){
             response.status(200).json({"msg":`Employee record deleted successfully with id as ${id}`});
        }else {
             response.status(200).json({"msg":`Employee not present with id as ${id}`});
        }
      
       
    }catch(error){
         response.status(404).json({"msg":error.message});
    }
})

app.listen(3000,()=>console.log("Server up with port number 3000"));