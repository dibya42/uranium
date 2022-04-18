const mongoose = require('mongoose');
let ObjectId = mongoose.Schema.Types.ObjectId


const developersSchema = new mongoose.Schema( {
      devName: String,
      gender:{
          type: String,
          enum: ["male","female","other"]
      },
       percentage: Number,
       batch:{
           type:ObjectId,
           ref: "batches"
       }
}, {timeseries: true});

module.exports = mongoose.model('developer', developersSchema)

