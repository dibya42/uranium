const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
  
    bookName:{
        type: String,
        required: true,},
       Price: {
	   indianPrice: Number,
	   europeanPrice: Number,
    },
      Year: Number,
      Tags: [ String ],
authorName: String,
totalPages: Number,
stockAvilable: Boolean,
sales:{
  type: Number
},
isPublished: Boolean,

       }, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema) //books

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
