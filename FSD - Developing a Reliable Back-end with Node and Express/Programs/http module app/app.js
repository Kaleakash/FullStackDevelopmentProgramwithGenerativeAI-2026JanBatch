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
    }else if (urlObj.pathname === '/about_us') {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        let aboutPage = fs.readFileSync('aboutus.html');
        response.write(aboutPage);
    } else if(urlObj.pathname === '/contact_us') {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        let contactPage = fs.readFileSync('contactus.html');
        response.write(contactPage);
    }else if(urlObj.pathname === '/login') {
        response.writeHead(200, { 'Content-Type': 'text/html' });   
        let loginPage = fs.readFileSync('login.html');
        response.write(loginPage);
    }
    else if(urlObj.pathname === '/checkLoginDetails') {
        // Handle login details check
        let username = urlObj.query.username;
        let password = urlObj.query.password;

        // For demonstration, we will just check if the username and password are not empty
        if (username ==="admin@gmail.com" && password === "admin123") {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(`<h1>Login Successful</h1><p>Welcome, ${username}!</p>`);
        } else {
            response.writeHead(400, { 'Content-Type': 'text/html' });
            response.write('<h1>Login Failed</h1><p>Please provide valid username and password.</p>');
        }
    }else {
        response.writeHead(404, { 'Content-Type': 'text/html' });
        response.write('<h1>404 Not Found</h1>');
    }

    response.end();

});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
