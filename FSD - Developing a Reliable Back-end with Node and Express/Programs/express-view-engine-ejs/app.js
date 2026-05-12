let express = require('express');
let app = express();

app.set('view engine','ejs');


app.get("/",(request,response)=>{
    response.render('index');
});


app.listen(3000,()=>console.log('Server is running on port 3000'));