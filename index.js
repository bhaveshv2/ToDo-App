const express=require('express');
const app =express();
const port=8000;



app.listen(port, function(err){
    if(err){
        console.log(`Error:${port}`);
    }
    console.log(`Sucessfully connected and running on port number:${port}`);
})