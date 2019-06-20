const mongoose = require('mongoose');

// our schema
const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    content: {
        type: String,
        required: false
    },
    status: {
        type: String,
        enum: ['DRAFT', 'PUBLISHED'],
        default: 'DRAFT'
    }
}, {
    timestamps: true
});


module.exports = mongoose.model('Blog', BlogSchema);