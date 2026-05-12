let express = require('express');
let fs = require('fs');
let app = express();


// middleware to parse urlencoded form data
app.use(express.urlencoded({extended: true}));

// set view engine to ejs
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
    let login = request.body;
    let msg = "";
    let logins = JSON.parse(fs.readFileSync("logins.json").toString());
    if(logins.length == 0){
        logins.push(login);
        fs.writeFileSync("logins.json",JSON.stringify(logins));
        msg = "Registration successful!";
    }else {
        let isExist = logins.some(l => l.email === login.email);
        if(isExist){
            msg = "Email already exists! Please use a different email.";
        }else {
            logins.push(login);
            fs.writeFileSync("logins.json",JSON.stringify(logins));
            msg = "Registration successful!";
        }
    }
    response.render("register",{message: msg});
})

app.post("/signIn",(request,response)=>{
    // registration logic here
    let login = request.body;
    let msg = "";
    let logins = JSON.parse(fs.readFileSync("logins.json").toString());
            let  isPresent= logins.find(l => l.email === login.email && l.password === login.password);
            if(isPresent){
                if(isPresent.userType === "admin"){
                    msg = `Welcome Admin ${isPresent.email}! Login successful!`;
                    response.render("adminHome",{message: msg});
                }else {
                    msg = `Welcome Customer ${isPresent.email}! Login successful!`;
                    response.render("customerHome",{message: msg});
                }
            }else {
                msg = "Invalid email or password.";
                response.render("login",{message: msg});
            }
});


app.get("/addProduct",(request,response)=>{
    response.render("addProduct",{message: ""});
})

app.post("/add-product-in-file",(request,response)=>{
    let product = request.body;
    let products = JSON.parse(fs.readFileSync("products.json").toString());
    products.push(product);
    fs.writeFileSync("products.json",JSON.stringify(products));
    response.render("addProduct",{message: "Product added successfully!"});
})

app.get("/viewProducts",(request,response)=>{
    let products = JSON.parse(fs.readFileSync("products.json").toString());
    response.render("viewProducts",{message: "", products: products});
})

app.listen(3000,()=>console.log('Server is running on port 3000'));