let express = require('express');// load the module
let app = express(); // create an instance of express

// http://localhost:3000/
app.get("/",(request,response)=> {
    response.writeHead(200,{"Content-Type":"text/html"}); // set the response header
    response.write("<h2>Welcome to Express JS Module</h2>"); // write a response to the client  
    response.write("<p>This is the home page</p>"); // write another response to the client
    response.send(); // send a response to the client
})


// http://localhost:3000/about
app.get("/about",(request,response)=> {
    response.writeHead(200,{"Content-Type":"text/html"}); 
    response.write("<h2>About Us</h2>"); // write a response to the client
    response.write("<p>We are a software development company</p>"); // write another response to the client 
    response.send(); // send a response to the client
})


// http://localhost:3000/contact
app.get("/contact",(request,response)=> {
    response.writeHead(200,{"Content-Type":"text/html"}); 
    response.write("<h2>Contact Us</h2>"); // write a response to the client
    response.write("<p>You can contact us at info@company.com</p>"); // write another response to the client    
    response.send(); // send a response to the client
})


app.listen(3000,()=>console.log('Server is running on port 3000')); // start the server and listen on port 3000 
