const List = require('../models/list');

module.exports.home = function(req,res){
    List.find({},function(err,list){
        if(err){
            console.log('error in fetching the list from db');
        }
        return res.render('home', {
            title:"TODO APP",
            list_todo:list
        });
    });
}

module.exports.createTodo = function(req,res){
    List.create(req.body
        ,function(err, newTodo){
        if(err){
            console.log('Error in creating the todo');
            return;
        }
        return res.redirect('/');
    });
}