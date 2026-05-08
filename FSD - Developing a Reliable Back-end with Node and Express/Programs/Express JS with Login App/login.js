let express = require('express');
let app = express();


// adding middleware to parse the body of the request
app.use(express.urlencoded({extended:true}));   // for parsing 
// application/x-www-form-urlencoded with post method. 


app.get("/",(request,response)=> {
    //response.sendFile("index.html");
    //response.sendFile("C:\\Users\\akash\\OneDrive\\Desktop\\MERN Stack Gen AI\\FullStackDevelopmentProgramwithGenerativeAI-2026JanBatch\\FSD - Developing a Reliable Back-end with Node and Express\\Programs\\Express JS with Login App\\index.html")
    //response.send(__dirname);
    response.sendFile(__dirname + "/index.html");
})


app.get("/login",(request,response)=> {
    response.sendFile(__dirname + "/login.html");
})

app.get("/about",(request,response)=> {
    response.sendFile(__dirname + "/about.html");
})

app.get("/contact",(request,response)=> {
    response.sendFile(__dirname + "/contact.html");
})

// login form with get method 
app.get("/checkLoginDetails",(request,response)=> {
    let username = request.query.username;      // request object only contains query parameters for GET request
    let password = request.query.password;
    if(username == "admin@gmail.com" && password == "admin123"){
        response.send("Login Successful");
    }else{
        response.send("Login Failed");
    }
})

// login form with post method 
app.post("/checkLoginDetails",(request,response)=> {
    let login = request.body;      // request object only contains body parameters for POST request
    let username = login.username;
    let password = login.password;
    if(username == "admin@gmail.com" && password == "admin123"){
        response.send("Login Successful");
    }else{
        response.send("Login Failed");
    }
    
})

app.listen(3000,()=>console.log("Server is running on port 3000"));