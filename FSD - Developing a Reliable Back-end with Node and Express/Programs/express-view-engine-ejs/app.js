let express = require('express');
let app = express();

app.set('view engine','ejs');


app.get("/",(request,response)=>{
    let msg = "Welcome to Express JS with View as EJS"
    // response.render("index");
    response.render('index',{message: msg});
});

app.get("/about",(request,response)=>{
    let aboutMsg = "This is the about page of our Express JS application"
    response.render('about',{aboutMessage: aboutMsg});
}
);

app.get("/contact",(request,response)=>{    
    let contactMsg = "This is the contact page of our Express JS application"
    response.render('contact',{contactMessage: contactMsg});
});

app.get("/login",(request,response)=>{
    let msg = "";
    response.render('login',{message: msg});
})

app.get("/register",(request,response)=>{
    let msg = "";
    response.render('register',{message: msg});
})

app.post("/signUp",(request,response)=>{
    // registration logic here
    
    let msg = "Registration successful! Please log in.";
    response.render("register",{message: msg});
})

app.post("/signIn",(request,response)=>{
    // login logic here


    let msg = "Login successful!";
    response.render("login",{message: msg});
});

app.listen(3000,()=>console.log('Server is running on port 3000'));