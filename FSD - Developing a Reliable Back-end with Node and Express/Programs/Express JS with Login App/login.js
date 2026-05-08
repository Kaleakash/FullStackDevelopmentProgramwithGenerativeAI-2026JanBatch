let express = require('express');
let app = express();



app.get("/",(request,response)=> {
    //response.sendFile("index.html");
    //response.sendFile("C:\\Users\\akash\\OneDrive\\Desktop\\MERN Stack Gen AI\\FullStackDevelopmentProgramwithGenerativeAI-2026JanBatch\\FSD - Developing a Reliable Back-end with Node and Express\\Programs\\Express JS with Login App\\index.html")
    //response.send(__dirname);
    response.sendFile(__dirname + "/index.html");
})




app.listen(3000,()=>console.log("Server is running on port 3000"));