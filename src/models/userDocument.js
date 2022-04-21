const mongoose = require('mongoose');

const userDocumentSchema = new mongoose.Schema({
name: String,
balance:{
    type: Number,
    default: 100
}, // Default balance at user registration is 100
address: String,
age: Number,
 gender: {
     type: String,
     enum:["male", "female", "other"]
 }, // Allowed values are - “male”, “female”, “other”
isFreeAppUser:{
    tyep: Boolean,
    default: false
}
}, { timestamps: true }); // Default false value.

module.exports = mongoose.model('UserDocument', userDocumentSchema ) 