const mongoose = require('mongoose');


const postSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },

    content: {
        type: String,
        required: true
    },

    image: {
        type: String,
    },

    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    comments: [{
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        content: {
            type: String,
            required: true
        }
    }],

    shares: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],

    visibility: {
        type: String,
        enum: ['public', 'private'],
        default: 'public'
    },

    scheduledAt: {
        type: Date,
        default: Date.now()
    }


}, { timestamps: true });


const PostModel = mongoose.model('post', postSchema);


module.exports = PostModel;