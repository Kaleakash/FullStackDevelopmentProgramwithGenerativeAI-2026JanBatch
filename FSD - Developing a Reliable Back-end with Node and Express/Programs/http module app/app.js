let http = require('http');
let fs = require('fs');
let url = require('url');
let PORT = 3000;

let server = http.createServer((request, response) => {
    let urlObj = url.parse(request.url, true);
    // response.writeHead(200, { 'Content-Type': 'text/html' });
    if (urlObj.pathname === '/') {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        let indexPage = fs.readFileSync('index.html');
        response.write(indexPage);
        response.end();
    }else if (urlObj.pathname === '/about_us') {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        let aboutPage = fs.readFileSync('aboutus.html');
        response.write(aboutPage);
        response.end();
    } else if(urlObj.pathname === '/contact_us') {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        let contactPage = fs.readFileSync('contactus.html');
        response.write(contactPage);
        response.end();
    }else if(urlObj.pathname === '/login') {
        response.writeHead(200, { 'Content-Type': 'text/html' });   
        let loginPage = fs.readFileSync('login.html');
        response.write(loginPage);
        response.end();
    }
    else if(urlObj.pathname === '/checkLoginDetails') {
        // Handle login details with get method 
        
    if(request.method === 'GET') {
           
        // Handle login details check
        let username = urlObj.query.username;
        let password = urlObj.query.password;

        // For demonstration, we will just check if the username and password are not empty
        if (username ==="admin@gmail.com" && password === "admin123") {
            //response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(`<h1>Login Successful</h1><p>Welcome, ${username}! with Get method</p>`);
        } else {
            //response.writeHead(400, { 'Content-Type': 'text/html' });
            response.write('<h1>Login Failed</h1><p>Please provide valid username and password.</p>');
        }
        response.end();
    }else if(request.method === 'POST') {
        // Handle login details with post method
        let body = '';
       
        // Listen for data event to receive the data chunks from the request body
        request.on('data', chunk => {
            body += chunk.toString();
        });
        // Listen for end event to process the complete data once it's received
        let username, password;
        request.on('end', () => {
            // Parse the body to extract username and password
            let params = new URLSearchParams(body);
            username = params.get('username');
            password = params.get('password');
            
        if (username ==="admin@gmail.com" && password === "admin123") {
            //response.writeHead(200, { 'Content-Type': 'text/html' });
            console.log("Login successful with post method");
            response.write(`<h1>Login Successful</h1><p>Welcome, ${username}! with post method</p>`);
            response.end();
        } else {
            console.log("Login failed with post method");
            //response.writeHead(400, { 'Content-Type': 'text/html' });
            response.write('<h1>Login Failed</h1><p>Please provide valid username and password.</p>');
            response.end();
        }
           
        });
         
        //response.end()
    }


    }else {
        response.writeHead(404, { 'Content-Type': 'text/html' });
        response.write('<h1>404 Not Found</h1>');
    }

    //response.end();

});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
