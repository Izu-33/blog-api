const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true
    },
    body: {
        type: String
    },
    category: {
        type: String
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    }    
}, {timestamps: true});

const Blog = mongoose.model('blog', blogSchema);

module.exports = Blog;