const mongoose = require('mongoose');

const batchSchema = new mongoose.Schema ( {
    name: String,
    size: Number,
    program: {
        type: String,
        enum: ["frontend", "backend"]
    }   
}, {timeseries: true});

module.exports = mongoose.model('batches', batchSchema)
