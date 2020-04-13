const express=require('express');
const app =express();
const port=8000;

app.use(express.urlencoded());

//View/Template Engine
app.set('view layout','ejs');
app.set('views','./views');

//Routers
app.use('/',require('./routes'));

//Server Creation
app.listen(port, function(err){
    if(err){
        console.log(`Error:${port}`);
    }
    console.log(`Sucessfully connected and running on port number:${port}`);
})