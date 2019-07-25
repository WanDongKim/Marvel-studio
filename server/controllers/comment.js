let express = require("express");
let router = express.Router();
let jwt = require('jsonwebtoken');

// define the User Model
let commentModel = require("../models/comment");
let userModel = require('../models/user');
//~~~~~~~~~~~~/api/:movie_id/comment
module.exports.displayList = (req, res, next) => {
    let movie_id = req.params.movie_id
    commentModel.find({content_id: movie_id}, (err, comments) => {
        if(err) {
            return console.error(err);
        } else {
            return res.json({success:true, msg: 'Successfully Get List', comments: comments })
        }
    });
};

//~~~~~~~~~~~~/api/:movie_id/comment/add
module.exports.processAddComment = (req, res, next) => {
    let newComment = commentModel({
        content_id: req.body.content_id,
        commentTitle: req.body.commentTitle,
        commentText: req.body.commentText,
        rating: req.body.rating,
        user_id: req.body.user_id,
        username: req.body.username
    });
    console.log(newComment);
    commentModel.create(newComment, (err, commentModel) => {
        if(err) {
            console.log('aaa')
            console.log(err);
            res.end(err);
        } else {
            console.log('aa');
            return res.json({success: true, msg: 'Successfully Added your Comment'})
        }
    });
}

//~~~~~~~~~~~~/api/:movie_id/comment/edit/:id
module.exports.processUpdateComment = (req, res, next) => {

}




//~~~~~~~~~~~~/api/:movie_id/comment/:id/reply
module.exports.processDeleteComment = (req, res, next) => {
    let id = req.params.id;
    commentModel.remove({_id: id}, (err) => {
        if(err){
            console.log(err);
            res.end(err);
        } else {
            res.json({success: true, msg: 'Sucessfully Deleted'});
        }
    })
}

//~~~~~~~~~~~~/api/:movie_id/comment/delete/:id
module.exports.processAddReplyToComment = (req, res, next) => {

}