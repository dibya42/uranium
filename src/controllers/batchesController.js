const batchesModel = require("../models/batchesModel")

const createBatch = async function(req, res){
    let body = req.body
    let makeBatch = await batchesModel.create(body)
    res.send({msg: makeBatch})
}

module.exports.createBatch = createBatch