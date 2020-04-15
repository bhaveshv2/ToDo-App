const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
    description:{
        type:String,
        required:true
    },

    category:{
        type:String,
    },

    duedate:{
        type: Date,
        required:true,
    }
});

const List=mongoose.model('list',listSchema);

module.exports = List;