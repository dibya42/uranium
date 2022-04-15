const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema( {
    author_id: Number,
    author_name: String,
    age: Number,
    address: String,
} , {timestemps: true});

// const booksScheme = new mongoose.Schema( {
//     name: String,
//     author_id: Number,
//     price: Number,
//     ratings: Number,
// } , { timestemps: true});


module.exports = mongoose.model('Author' , authorSchema)
// module.exports = mongoose.model('Book', booksScheme)
