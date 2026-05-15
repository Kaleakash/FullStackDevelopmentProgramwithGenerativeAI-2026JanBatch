let express = require('express');
let app = express();




// http://localhost:3000/

app.get("/",(request,response)=>{
    response.send("Welcome to Rest API with Express JS and Node JS");
})

// http://localhost:3000/html_message

app.get("/html_message",(request,response)=>{
    response.setHeader("Content-Type","text/html");
    response.send("<h1>Welcome to Rest API with Express JS and Node JS</h1>");
})
// http://localhost:3000/text_message

app.get("/text_message",(request,response)=>{
    response.setHeader("Content-Type","text/plain");
    response.send("<h1>Welcome to Rest API with Express JS and Node JS</h1>");
})
// http://localhost:3000/json_message

app.get("/json_message",(request,response)=>{
    response.setHeader("Content-Type","application/json");
    response.send(JSON.stringify({message: "Welcome to Rest API with Express JS and Node JS"}));
})
// http://localhost:3000/xml_message
app.get("/xml_message",(request,response)=>{
    response.setHeader("Content-Type","application/xml");
    response.send("<h1>Welcome to Rest API with Express JS and Node JS</h1>");
})








app.listen(3000, ()=>console.log('Server is running on port 3000'));