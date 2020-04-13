const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/TODO_APP');

const db = mongoose.connection;

db.on('error', console.error.bind(console,'Error Connecting to DB'));

db.once('open',function(){
    console.log('Sucessfully connected to the Database');
})