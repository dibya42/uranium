const mongoose = require('mongoose');

const productDocumentSchema = new mongoose.Schema({
    name:String,
	category:String,
	price:{
        type: Number,
        required: true

    } //mandatory property
}, {timestamps:true});


module.exports = mongoose.model('Product', productDocumentSchema ) 