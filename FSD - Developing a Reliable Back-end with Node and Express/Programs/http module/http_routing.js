let http = require("http");
let url = require("url");
let PORT=3000;

let server = http.createServer((request,response)=> {
    let urlInfo = url.parse(request.url,true);
    // http://localhost:3000/
    response.writeHead(200,{"Content-Type":"text/html"});
    if(urlInfo.pathname=="/"){
        response.write("<h2>Home Page</h2>");
        response.write("<p>Welcome Home Page Description</p>"); 
      // http://localhost:3000/about
    }else if(urlInfo.pathname=="/about"){
        response.write("<h2>About Page</h2>");
        response.write("<p>Welcome to About Page</p>");
        // http://localhost:3000/contact
    }else if(urlInfo.pathname=="/contact"){
        response.write("<h2>Contact Page</h2>");
        response.write("<p>Welcome to Contact Page</p>");
       
    }else {
        // http://localhost:3000/abcd
        response.write("<b>404 Not Found</b>");
    }
    response.end();
});

server.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});
