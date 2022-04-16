const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema( {
    author_id: {
        type: Number,
        required: true
    },
    authorname: String,
    age: Number,
    address: String,
} , {timestemps: true});

module.exports = mongoose.model('Author' , authorSchema)
// module.exports = mongoose.model('Book', booksScheme)
