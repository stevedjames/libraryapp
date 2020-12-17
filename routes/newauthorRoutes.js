
const express = require('express');
const newauthorRoutes =express.Router();
const Authordata = require('../models/authordata');
function router(nav){
    newauthorRoutes.get('/',function(req,res){
        res.render('newauthor',{
            nav,
            title: 'Library'
        })
    })
    newauthorRoutes.post('/add',function(req,res){
        var item={
            title:req.body.title,
            year:req.body.year,
            genre:req.body.genre,
            image:req.body.image
        }

       var author =  Authordata(item)
       author.save(); //saving to db
       res.redirect('/authors');
       
});

    return newauthorRoutes;
}

module.exports = router;
