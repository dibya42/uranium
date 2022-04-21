const productDocument = require('../models/productModel')

const createProduct = async function(req, res){
    productData = req.body
    let savedData = await productDocument.create(productData)
res.send ({msg: savedData})
}

module.exports.createProduct =createProduct