let express = require('express');
let app = express();

app.set('view engine','ejs');


app.get("/",(request,response)=>{
    let msg = "Welcome to Express JS with View as EJS"
    // response.render("index");
    response.render('index',{message: msg});
});


app.listen(3000,()=>console.log('Server is running on port 3000'));