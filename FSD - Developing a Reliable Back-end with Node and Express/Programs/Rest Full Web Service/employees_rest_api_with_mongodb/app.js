let express = require("express");
let mongodb = require("mongodb");

let app = express();
let URL = "mongodb://localhost:27017";

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


app.listen(3000,()=>console.log("Server up with port number 3000"));