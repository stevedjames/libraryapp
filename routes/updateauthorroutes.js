
const express = require('express');
const updateauthorroutes =express.Router();
const Authordata = require('../models/authordata');

function router(nav){
    // updateauthorroutes.get('/',function(req,res){
    //     res.render('updateauthor',{
    //         nav,
    //         title: 'Library'
    //     })
    // })
//     updateauthorroutes.post('/update',function(req,res){
//         var item={
//             title:req.body.title,
//             year:req.body.year,
//             genre:req.body.genre,
//             image:req.body.image
//         }
//         var title = req.body.title;
        
//         Authordata.updateOne({title:title},{$set:item},function(err,red){
//             res.redirect('/authors');

//         })
//     //    author.save(); //saving to db
        
    
        
// });

    return updateauthorroutes;
}

module.exports = router;
