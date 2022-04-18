const developersModel = require("../models/developersModel")

const createDevelopers = async function(req,res){
    let body = req.body
    let makeDevelopers = await developersModel.create(body)
    res.send({msg:makeDevelopers})
}

const scholership = async function (req, res) { 
     let data = await developersModel.find({gender:"female",percentage : {$gte : 70}})
 res.send({ msg: data })}


 const devFromBatch = async function (req, res) { 
     const getdata = req.query.name 
     const getpercentage = req.query.percentage
     const getbatchId = await batchesModel.findOne({ name: getdata }).select({_id:1}) 
     const getDev = await developersModel.find({batch : getbatchId,percentage:{ $gt:getpercentage}}).populate('batches').select({_id:0,createdAt:0,updatedAt:0})
      res.send({ msg: getDev })}


module.exports.createDevelopers = createDevelopers
module.exports.scholership = scholership
module.exports.devFromBatch = devFromBatch