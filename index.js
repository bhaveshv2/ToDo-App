const express=require('express');
const path = require('path');
const app =express();
const db=require('./config/mongoose');
const List = require('./models/list');
const port=8000;
const sassMiddleware = require('node-sass-middleware');


app.use(sassMiddleware({
    src:'./assets/scss',
    dest:'./assets/css',
    debug:true,
    outputStyle:'extended',
    prefix:'/css',
}));

app.use(express.urlencoded());

//Expreess Layouts
const expressLayouts= require('express-ejs-layouts');
app.use(expressLayouts);

//Static Resources
app.use(express.static('./assets'));
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);


//View/Template Engine
app.set('view engine','ejs');
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