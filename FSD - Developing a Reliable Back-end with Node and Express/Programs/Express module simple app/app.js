let express = require('express');// load the module
let app = express(); // create an instance of express

// http://localhost:3000/
app.get("/",(request,response)=> {
    response.send("Welcome to Express JS Module"); // send a response to the client
})



app.listen(3000,()=>console.log('Server is running on port 3000')); // start the server and listen on port 3000 
