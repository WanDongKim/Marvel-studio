let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");
let passport = require("passport");

let jwt = require("jsonwebtoken");
let DB = require("../config/db");

// define the User Model
let userModel = require("../models/user");
let User = userModel.User;

// Process Login Function
//~~~~~~~~~~~~/api/auth/login

module.exports.processLoginPage = (req, res, next) => {
    passport.authenticate('local',
    (err, user, info) => {
        if(err) {
            return next(err);
        }
        if(!user) {
            return res.json({success: false, msg: 'ERROR: Failed to log in User!'});
        }
        req.logIn(user, (err) => {
            if(err){
                return next(err);
            }
            const payload = {
                id: user._id,
                username: user.username,
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName
            }
            const authToken = jwt.sign(payload, DB.secret, {
                expiresIn: 86400 // 1 day
            });
            return res.json({success: true, msg: 'User logged in successfully!', user: {
                id: user._id,
                username: user.username,
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName
            }, token: authToken});
        });
    })(req, res, next);
}

//User reigistration API
//~~~~~~~~~~~~/api/auth/register
module.exports.processRegisterPage = (req, res, next) => {
    let newUser = new User({
        username: req.body.username,
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName
    });

    User.register(newUser, req.body.password, (error) => {
        if(error) {
            console.log('Error occuring: Inserting new user');
            if(error.name == "UserExisstError") {
                console.log('Error: User Already Exists');
            }
            console.log(error);
            return res.json({success: false, msg: 'ERROR: Failed to Register new user!'});
        } else {
            return passport.authenticate("local")(req, res, () => {
                return res.json({success: true, msg: 'User registered successfully!'});
            });
        }
    })
}

module.exports.performLogout = (req, res, next) => {
    req.logout();
    res.json({success: true, msg: 'User Successfully Logged Out!'});
};
