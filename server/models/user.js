
let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');

let userSchema = mongoose.Schema(
    {
        username:{
            type: String,
            default: "",
            trim: true,
            require: "username is required"
        },
        email: {
            type: String,
            default: "",
            trim: true,
            required: "email is required"
        },
        firstName: {
            type: String,
            default: "",
            trim: true,
            required: "firstname is required"
        },
        lastName: {
            type: String,
            default: "",
            trim: true,
            required: "lastname is required"
        },
        created: {
            type: Date,
            default: Date.now
        },
        update: {
            type: Date,
            default: Date.now
        }
    },
    {
        collection: "users"
    }
);
    
    // configure options for the UserSchema
    
    let options = ({
        missingPasswordError: "Wrong / Missing Password"
    });
    
    userSchema.plugin(passportLocalMongoose, options);
    module.exports.User = mongoose.model('User', userSchema);