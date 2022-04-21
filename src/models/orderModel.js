// const moment = require('moment')
const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    userId: String,
	productId: String,
	amount: Number,
	isFreeAppUser: {
        type: Boolean
    }
}, {timestamps:true});

module.exports = mongoose.model('Order', orderSchema ) 