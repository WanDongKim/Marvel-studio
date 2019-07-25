let mongoose = require('mongoose');

let commentSchema = mongoose.Schema(
    {
        content_id: {
            type: String,
            require: true
        },
        reply_id: {
            type: String
        },
        commentTitle: {
            type: String,
            default: '',
            required: true
        },
        commentText: {
            type: String,
            default: '',
            required: true
        },
        rating: {
            type: Number,
            default: 0,
            min: 0,
            max: 10,
        },
        user_id: {
            type: String,
            required: true
        },
        username: {
            type: String,
            require: true
        },
        created: {
            type: Date,
            default: Date.now,
            required: true
        },
        update: {
            type: Date,
            default: Date.now
        }
    },
    {
        collection: "comments"
    }
);
    
module.exports = mongoose.model('Comment', commentSchema);