let http = require('http');

// Create a server object
// this code execute only if any client application send 
// request to this server application
// using URL as http://localhost:3000
// using URL as http://127.0.0.1:3000
let server = http.createServer((request,response)=> {

    response.end("Welcome to First Node.js Server App!");
})

server.listen(3000,()=>console.log("Server is running on port 3000"));