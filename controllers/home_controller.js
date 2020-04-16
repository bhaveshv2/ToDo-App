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

module.exports.deleteTodo = function(req,res){
    console.log(req.query);
    var id=req.query;
    for(key of Object.keys(id))
    {
        console.log(key);
        List.findByIdAndDelete(key,function(err)
        {
            if(err)
            {
                console.log("Error in deleteing keys ",err);
                return;
            }
        })
    }
    return res.redirect("back");
    
}